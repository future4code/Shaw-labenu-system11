import { Request, Response } from "express"
import connection from "../connection"


export default async function getActiveClasses(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const id = req.params.id

      const result = await connection.raw(`
         SELECT * FROM students WHERE id = ${id};
      `)
      
      res.status(201).send({student: result[0] })                                                                                                                                                                              

   } catch (error) {
       res.status(400).send({
            message: error.message || error.sqlMessage
        })
   }
}