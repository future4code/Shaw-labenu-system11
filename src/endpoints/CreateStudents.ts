import connection from "../connection";
import { estudantes } from "../types/typeStudents";
import { Request, Response } from "express";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { birth_date } = req.body;

    const resultado = insertDb(req.body);
    res.send(resultado).status(201);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export const insertDb = async (student: estudantes): Promise<any> => {
  const { name, birth_date, class_id } = student;
  const split = birth_date.split("/");
  const dia = split[0];
  const mes = split[1];
  const ano = split[2];

  const resultado = await connection
    .insert({
      name: name,
      birth_date: new Date(`${ano}/${mes}/${dia}`),
      class_id: class_id,
    })
    .into("students");
  return resultado;
};
