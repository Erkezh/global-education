import logging
from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, database
from .telegram import send_telegram_notification
import os

logging.basicConfig(level=logging.INFO)

app = FastAPI(title="Global Education API")

# Setup CORS
origins = [
    "http://localhost:5173", # Vue dev server
    "http://127.0.0.1:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Since it's a landing page API, usually all origins or just the deployed domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    try:
        # Check if database file/connection exists, if sqlite we create all. 
        # For postgresql, usually alembic is used, but for simplicity we use create_all
        models.Base.metadata.create_all(bind=database.engine)
    except Exception as e:
        logging.error(f"Error creating tables: {e}")

@app.post("/api/applications", response_model=schemas.ApplicationResponse)
async def create_application(
    application: schemas.ApplicationCreate, 
    background_tasks: BackgroundTasks,
    db: Session = Depends(database.get_db)
):
    # 1. Validation is handled by Pydantic (ApplicationCreate)
    
    # 2. Save application to PostgreSQL
    db_app = models.Application(
        name=application.name,
        phone=application.phone,
        grade=application.grade
    )
    db.add(db_app)
    try:
        db.commit()
        db.refresh(db_app)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Database error occurred.")

    # 3. Send Telegram notification in background
    background_tasks.add_task(send_telegram_notification, application)

    # 4. Return success response
    return db_app

@app.get("/api/applications", response_model=list[schemas.ApplicationResponse])
def get_applications(db: Session = Depends(database.get_db), skip: int = 0, limit: int = 100):
    apps = db.query(models.Application).order_by(models.Application.created_at.desc()).offset(skip).limit(limit).all()
    return apps
