import * as express from "express";
import * as cors from "cors";
import { getStudents } from "./endpoints/searchStudents";
import { createStudent } from "./endpoints/CreateStudents";
import createClass from "./endPoints/createClass";
import getActiveClasses from "./endPoints/getActiveClasses";
import { createTeacher } from "./endpoints/createTeacher";
import selectTeacher from "./endPoints/getTeacher";


const app = express()
app.use(express.json());
app.use(cors());





//**→ Criar turma**
app.post("/class", createClass);

//**→ Buscar turmas ativas**
app.get("./activeclasses", getActiveClasses );
//**→ Mudar turma de módulo**
app.put("/muduleedit/:id", )


//**→ Criar estudante**
app.post("/studentsnew", createStudent )
//**→ Buscar estudantes através do nome**
app.get("/students", getStudents )
//**→ Mudar estudante de turma**
app.put("/studentsedit/:id")



//**→ Criar docente**
app.post("/createteacher",createTeacher )
//**→ Buscar todas as pessoas docentes**
app.get("/teacher", selectTeacher )
//**→ Mudar docente de turma**
app.put("/teachersedit/:id")

app.listen(3003, () => {
    console.log ("Servidor rodando na porta 3003")
}) 