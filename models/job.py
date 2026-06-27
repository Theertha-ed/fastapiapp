from sqlalchemy import Column,Interger,String,Enum,ForeignKey
from database import Base,engine,SessionLocal
from sqlalchemy .orm import relationship 


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title=Column(String,nullable=False)
    description=Column(Integer)
    salary=Column(Integer)
    company_id= Column(Integer,ForeignKey("companies.id"))
    company=relationship("Company",back_populates="jobs")
    
    
   