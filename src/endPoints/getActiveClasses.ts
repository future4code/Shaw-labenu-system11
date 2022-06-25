import { Request, Response } from "express";
import connection from "../connection";
import { Class } from "../types/typeClass";
import { teachers } from "../types/typeTeacher";

const getTeachers = async (class_id: number): Promise<any> => {
  const result = await connection.raw(`
   SELECT * FROM teacher where class_id = ${class_id};
`);
  return result[0][0];
};

export const getActiveClasses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const result = await connection.raw(`
         SELECT * FROM class where id = ${id};
      `);

    const turma: Class = result[0][0];

    if (!turma) {
      res.status(404);
      throw new Error("Class not found");
    }
   
    res.status(201).send(turma);
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};
