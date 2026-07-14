from fastapi import APIRouter

from app.ai.intent_service import detect_intent

router = APIRouter(
    prefix="/ai",
    tags=["AI Actions"]
)


@router.post("/action")
def ai_action(data: dict):

    message = data.get("message", "")

    result = detect_intent(message)

    return result