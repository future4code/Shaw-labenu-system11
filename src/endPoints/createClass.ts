import { Request, Response } from "express"
import  connection  from "../connection"
import { Class, TYPE_CLASS } from "../types/typeClass"


export default async function createClass(
    req: Request,
    res: Response
 ): Promise<void> {
    try {

        //validar entradas da requisiçao

        let errorCode = 400;

      const input: Class = {
        Class_Name: req.body.Class_Name, 
        Initial_Date:req.body.Initial_Date, 
        Final_Date:req.body.Final_Date, 
        Module: 0,
        tipo: req.body.tipo
      }

      if(!input.Class_Name || !input.Initial_Date ||
          !input.Final_Date || !input.tipo) {
            errorCode = 422;
            throw new Error("Campos obrigatorios!")
          }
      
      if(input.tipo !== TYPE_CLASS.INTEGRAL && input.tipo !== TYPE_CLASS.NOTURNA) {
             errorCode = 422;
            throw new Error("Campos obrigatorios!")

          }
      if(input.tipo === TYPE_CLASS.NOTURNA) {
         input.Class_Name = input.Class_Name +="-na-night";
      }    

        //consultar o banco de dados

        

        await connection.raw(`
        INSERT INTO class ( Class_Name, Initial_Date, Final_Date,Module)
        VALUES(
            "${req.body.Class_Name}",
            "${req.body.Initial_Date}",
            "${req.body.data_final}",
             ${input.Module}
        );
    `);  
    

        //validar a saidas do banco

        //** não ouve saída**//


        //responder a requisição

        res
            .status(200)
            .send('Criado com sucesso!')

    }
    catch (error) {
        res.status(400).send({
            message: error.message || error.sqlmessage
        })

    }
} 
    
 
