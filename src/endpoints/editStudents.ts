import connection from "../connection";
import { Request, Response } from "express";

export const editStudents = async (
  id: string,
  class_id: string
): Promise<void> => {
  console.log(id, class_id);
  await connection("students")
    .update({
      class_id: class_id,
    })
    .where("id", id);
};

export const updateStudentClass = async (req: Request, res: Response) => {
  try {
    await editStudents(req.params.id, req.body.class_id);

    res.status(200).send({ message: "success" });
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
