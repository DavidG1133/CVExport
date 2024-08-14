from fastapi import FastAPI
import uvicorn 
from pydantic import BaseModel
from typing import List,Union
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
PORT : int = 8080

class Usuario(BaseModel):
    nombre: str
    username : str
    email: str
    contra : str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials = True,
    allow_methods = ["GET", "POST","PUT", "DELETE","OPTIONS"],
    allow_headers = ["*"]
)
    
db= mysql.connector.connect(
    host = "localhost",
    user ="root",
    password = "root",
    database = "usuarios2",
    consume_results= True
)

@app.get("/")
def message():
    return {"msg": "Hola mundo desde FastAPI"}

@app.get("/users")
def getUsuarios():
    usuarios = []
    query = "SELECT * FROM users"
    cursor = db.cursor()
    cursor.execute(query)
    records = cursor.fetchall()
    no_regs = cursor.rowcount
    if no_regs > 0 :
        for record in records:
            usuario ={
                "id"  :  record[0],
                "nombre"     :  record[1],
                "username"  :  record[2],
                "email"    : record[3],
                "contra"  : record[4]
            }
            usuarios.append(usuario)
        return {"status" : "ok", "msg":"Si hay usuarios","data": usuarios}
    else:
        return {"status" : "ok", "msg":"No hay usuarios registrados"}

@app.post("/users")
def setUsuario(usuario: Usuario):
    query = "INSERT INTO users (`nombre`, `username`, `email`, `contra`) VALUES (%s, %s, %s, %s)"
    cursor = db.cursor()
    cursor.execute(query, (usuario.nombre, usuario.username, usuario.email, usuario.contra))
    db.commit()
    return {"status": "Ok", "msg": "Usuario agregado", "data": {"nombre": lastIndex("users", "nombre")}}

@app.get("/login1")
def login(username: str, password: str):
    query = "SELECT * FROM users WHERE username = %s AND contra = %s"
    cursor = db.cursor()
    cursor.execute(query, (username, password))
    record = cursor.fetchone()
    if record:
        return {"status": "Ok", "msg": "Login exitoso"}
    else:
        return {"status": "Error", "msg": "Credenciales incorrectas"}


def lastIndex(tabla: str,attr :str):
    query = "SELECT {} FROM {} ORDER BY {} desc".format(attr,tabla,attr)
    cursor = db.cursor()
    cursor.execute(query)
    record = cursor.fetchone()
    return record[0]
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=PORT)