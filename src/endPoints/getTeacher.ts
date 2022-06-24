import connection from "../connection";
import { Request, Response } from "express";

export default async function selectTeacher(): Promise<any> {
  const result = await connection.raw(`
    select id,name, email, birth_date, class_id from teacher
    `);
}

let statusCode = 400;
export const getTeacher = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {const { birth_date } = req.body;
  const split = birth_date.split("/");
  const dia = split[0];
  const mes = split[1];
  const ano = split[2];
  
    const name = req.query.name as string;
    const teacher = await selectTeacher();

    if (!teacher.length) {
      res.status(404);
      throw new Error("Docente não existente");
    }

    res.send(teacher).status(200);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
