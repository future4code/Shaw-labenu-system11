import connection from "../connection";
import { Request, Response } from "express";
import { teachers } from "../types/typeTeacher";

export default async function selectTeacher(
  ): Promise<any> {
  const query = `
    select id,name, email, birth_date, class_id from teacher
    `;

  const result = await connection.raw(query);
  return result[0][0];
}

export const getTeacher = async (req: Request, res: Response): Promise<any> => {
  try {
    const teacher: teachers[] = await selectTeacher();
    console.log(teacher);
    res.send(teacher).status(200);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
