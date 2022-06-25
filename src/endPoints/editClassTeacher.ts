import connection from "../connection";
import { Request, Response } from "express";
import { teachers } from "../types/typeTeacher";

export const editClass = async (
  id: string,
  class_id: string
): Promise<void> => {
  await connection("teacher")
    .update({
      class_id: class_id,
    })
    .where("id", id);
};

export const updateClassTeacher = async (req: Request, res: Response) => {
  try {
    await editClass(req.params.id, req.body.class_id);

    res.status(200).send({ message: "success" });
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
