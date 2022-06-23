import * as express from "express";
import * as cors from "cors";
import knex  from "knex";
import * as dotenv from 'dotenv';
import { getStudents } from "./endpoints/searchStudents";
import { createStudent } from "./endpoints/CreateStudents";
import createClass from "./endPoints/createClass";
import getActiveClasses from "./endPoints/getActiveClasses";



/* dotenv.config()

const connection = knex ({ // Estabelece conexão com o banco
    client: "mysql",
    connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true
    }
   })

   export default connection */

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
app.get("./students", getStudents )
//**→ Mudar estudante de turma**
app.put("/studentsedit/:id")



//**→ Criar docente**

//**→ Buscar todas as pessoas docentes**

//**→ Mudar docente de turma**


app.listen(3003, () => {
    console.log ("Servidor rodando na porta 3003")
}) 