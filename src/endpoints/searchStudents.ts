import connection from "../connection";
import { query, Request, Response } from "express";
import { estudantes } from "../types/typeStudents";

export default async function selectStudents(name: string): Promise<any> {
  const query = `
    select id,name,email, birth_date, class_id from students where name = "${name}"
        `;
  console.log(query);
  const result = await connection.raw(query);
  return result[0][0];

}

let statusCode = 400;
export const getStudents = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const name = req.query.name as string;
    const student: estudantes[] = await selectStudents(name);

    console.log(student);

    if (!student) {
      res.status(404);
      throw new Error("estudante não existente");
    }

    res.send(student).status(200);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
