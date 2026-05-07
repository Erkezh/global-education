import os
import httpx
import logging
from .schemas import ApplicationCreate
from datetime import datetime

logger = logging.getLogger(__name__)

async def send_telegram_notification(app: ApplicationCreate):
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    chat_id = os.getenv("TELEGRAM_CHAT_ID")
    
    if not bot_token or not chat_id:
        logger.warning("Telegram credentials not configured. Skipping notification.")
        return

    text = f"""
🚨 <b>New application received!</b>

👤 <b>Name:</b> {app.name}
📞 <b>Phone:</b> {app.phone}
🎓 <b>Grade:</b> {app.grade}
⏰ <b>Submitted at:</b> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
    """

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML"
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()
    except Exception as e:
        logger.error(f"Failed to send Telegram notification: {str(e)}")
        # We don't raise the exception to avoid failing the user's request
