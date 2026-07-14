from fastapi import APIRouter
from pydantic import BaseModel

from app.ai.groq_service import extract_interaction

router = APIRouter(prefix="/ai", tags=["AI"])


class AIRequest(BaseModel):
    message: str


@router.post("/extract")
def extract(request: AIRequest):
    result = extract_interaction(request.message)
    return result