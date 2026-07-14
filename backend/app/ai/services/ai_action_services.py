from sqlalchemy.orm import Session

from app.models.interaction import Interaction


def update_interaction_by_doctor(
    db: Session,
    doctor: str,
    updates: dict
):

    interaction = (
        db.query(Interaction)
        .filter(Interaction.hcp_name.ilike(f"%{doctor}%"))
        .first()
    )

    if not interaction:
        return {
            "success": False,
            "message": "Doctor not found."
        }

    for key, value in updates.items():

        if value not in [None, ""]:

            setattr(interaction, key, value)

    db.commit()
    db.refresh(interaction)

    return {
        "success": True,
        "message": "Interaction updated successfully."
    }


def delete_interaction_by_doctor(
    db: Session,
    doctor: str
):

    interaction = (
        db.query(Interaction)
        .filter(Interaction.hcp_name.ilike(f"%{doctor}%"))
        .first()
    )

    if not interaction:
        return {
            "success": False,
            "message": "Doctor not found."
        }

    db.delete(interaction)
    db.commit()

    return {
        "success": True,
        "message": "Interaction deleted successfully."
    }


def show_all_interactions(
    db: Session
):

    interactions = db.query(Interaction).all()

    return interactions