from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.interaction import (
    InteractionCreate,
    InteractionResponse,
)
from app.services.interaction_service import (
    create_interaction,
    get_all_interactions,
    delete_interaction,
)

router = APIRouter(
    prefix="/interactions",
    tags=["Interactions"]
)


@router.post("/", response_model=InteractionResponse)
def create_new_interaction(
    interaction: InteractionCreate,
    db: Session = Depends(get_db),
):
    return create_interaction(db, interaction)


@router.get("/", response_model=list[InteractionResponse])
def fetch_interactions(
    db: Session = Depends(get_db),
):
    return get_all_interactions(db)


@router.delete("/{interaction_id}")
def remove_interaction(
    interaction_id: int,
    db: Session = Depends(get_db),
):

    deleted = delete_interaction(
        db,
        interaction_id
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Interaction not found."
        )

    return {
        "message": "Interaction deleted successfully."
    }