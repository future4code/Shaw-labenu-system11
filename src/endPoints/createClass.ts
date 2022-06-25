import { Request, Response } from "express";
import connection from "../connection";
import { TYPE_CLASS } from "../types/typeClass";
import getNewDate from "../util";

export const createClass = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let errorCode;
    const { Class_Name, Initial_Date, Final_Date, tipo } = req.body;

    if (!Class_Name || !Initial_Date || !Final_Date || !tipo) {
      errorCode = 422;
      throw new Error("Campos obrigatorios!");
    }

    if (tipo !== TYPE_CLASS.INTEGRAL && tipo !== TYPE_CLASS.NOTURNO) {
      errorCode = 422;
      throw new Error("TIPO INVÁLIDO");
    }

    await connection.raw(`
       INSERT INTO class ( Class_Name, Initial_Date, Final_Date,Module)
        VALUES(
            "${req.body.Class_Name}",
            "${getNewDate(req.body.Initial_Date)}",
            "${getNewDate(req.body.Final_Date)}",
             "${0}"
        );
    `);

    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlmessage,
    });
  }
};
