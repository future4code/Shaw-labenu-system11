import { Request, Response } from "express";
import connection from "../connection";

export const editModule = async (id: string, module: string): Promise<void> => {
  await connection("class")
    .update({
      module: module,
    })
    .where("id", id);
};

export const changeClassModule = async (req: Request, res: Response) => {
  try {
    await editModule(req.params.id, req.body.module);
    res.status(200).send({ message: "success" });
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
