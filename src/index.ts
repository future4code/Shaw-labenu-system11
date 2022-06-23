import * as express from "express";
import * as cors from "cors";
import knex  from "knex";
import * as dotenv from 'dotenv';
import app from "./app";
import { getStudents } from "./endpoints/searchStudents";
import { createStudent } from "./endpoints/CreateStudents";
 

app.get("./students", getStudents )
app.post("/studentsnew", createStudent )
app.put("/studentsedit/:id")
//**→ Criar turma**

//**→ Buscar turmas ativas**

//**→ Mudar turma de módulo**



//**→ Criar estudante**

//**→ Buscar estudantes através do nome**

//**→ Mudar estudante de turma**



//**→ Criar docente**

//**→ Buscar todas as pessoas docentes**

//**→ Mudar docente de turma**


