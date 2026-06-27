from fastapi import FastAPI 
from routers import company,job
from database import Base,engine

app = FastAPI()
print(engine)

app.include_router(company.router)
app.include_router(job.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/about")
def read_about():
    return {"About": "This is a FastAPI application."}
2
@app.get("/contact")
def read_contact():
    return {"Contact": "You can reach us at edtheertha@gmail.com"}
