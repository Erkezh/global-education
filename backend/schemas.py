from pydantic import BaseModel, constr
from datetime import datetime

class ApplicationCreate(BaseModel):
    name: str
    phone: str
    grade: str

class ApplicationResponse(BaseModel):
    id: int
    name: str
    phone: str
    grade: str
    created_at: datetime

    class Config:
        from_attributes = True
