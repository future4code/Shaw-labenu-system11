import connection from "../connection";
import { Request, Response } from "express";

export default async function selectStudents(name: string): Promise<any> {
  const result = await connection.raw(`
    select id,name, birth_date, class_id from estudantes where name = ${name}
    `);
}
let statusCode = 400;
export const getStudents = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {const { birth_date } = req.body;
  const split = birth_date.split("/");
  const dia = split[0];
  const mes = split[1];
  const ano = split[2];
  
    const name = req.query.name as string;
    const student = await selectStudents(name);

    if (!student.length) {
      res.status(404);
      throw new Error("estudante não existente");
    }

    res.send(student).status(200);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
