import connection from "../connection";

import { Request, Response } from "express";
import { teachers } from "../types/typeTeacher";

export const createTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const resultado = insertDb(req.body);
    res.send(resultado).status(201);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export const insertDb = async (docente: teachers): Promise<any> => {
  const { name, birth_date, class_id, email } = docente;
  const split = birth_date.split("/");
  const dia = split[0];
  const mes = split[1];
  const ano = split[2];

  const resultado = await connection
    .insert({
      name: name,
      birth_date: new Date(`${ano}/${mes}/${dia}`),
      class_id: class_id,
      email: email,
    })
    .into("teacher");
  return resultado;
};
