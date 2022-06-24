import connection from "../connection";
import { Request, Response } from "express";



export const editClass = async (
  id: string,
  class_id: string
): Promise<any> => {
  await connection("teacher")
    .update({
      class_id: class_id,
    })
    .where("id", id);
};

export const updateClass = async (req: Request, res: Response) => {
  try {
    await editClass(req.params.id, req.body.class_id);

    res.status(200).send({ message: "sucess" });
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};