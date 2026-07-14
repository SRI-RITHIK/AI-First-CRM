from sqlalchemy.orm import Session
from app.models.interaction import Interaction


def create_interaction(db: Session, interaction):
    new_interaction = Interaction(
        hcp_name=interaction.hcp_name,
        hospital=interaction.hospital,
        speciality=interaction.speciality,
        interaction_type=interaction.interaction_type,
        interaction_date=interaction.interaction_date,
        notes=interaction.notes,
    )

    db.add(new_interaction)
    db.commit()
    db.refresh(new_interaction)

    return new_interaction


def get_all_interactions(db: Session):
    return db.query(Interaction).all()


def delete_interaction(db: Session, interaction_id: int):

    interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not interaction:
        return False

    db.delete(interaction)
    db.commit()

    return True