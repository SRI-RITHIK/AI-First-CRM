from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.database import engine
from app.models.interaction import Base

from app.api.interaction import router as interaction_router
from app.api.ai import router as ai_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(interaction_router)
app.include_router(ai_router)


@app.get("/")
def home():
    return {
        "message": "AI-First CRM Backend Running Successfully!"
    }