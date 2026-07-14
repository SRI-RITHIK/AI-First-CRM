from sqlalchemy import Column, Integer, String, Text
from app.database.database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_name = Column(String(100), nullable=False)

    hospital = Column(String(150), nullable=False)

    speciality = Column(String(100), nullable=False)

    interaction_type = Column(String(50), nullable=False)

    interaction_date = Column(String(50), nullable=False)

    notes = Column(Text, nullable=True)