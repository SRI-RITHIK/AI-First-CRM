from pydantic import BaseModel


class InteractionCreate(BaseModel):
    hcp_name: str
    hospital: str
    speciality: str
    interaction_type: str
    interaction_date: str
    notes: str


class InteractionResponse(InteractionCreate):
    id: int

    class Config:
        from_attributes = True