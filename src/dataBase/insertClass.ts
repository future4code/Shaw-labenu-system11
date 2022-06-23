import connection from "../connection";
import { TYPE_CLASS } from "../types/typeClass";
import getNewDate from "../util";

export default async function insertClass(
    Id_Class: number,
    Class_Name: string,
    Initial_Date: string,
    Final_Date:string,
    Module:number,
    tipo: TYPE_CLASS
) {

    const data_initial = getNewDate(Initial_Date);
    const data_fim = getNewDate(Final_Date);
    await connection.insert({
    Id_Class,
    Class_Name ,
    data_initial,
    data_fim,
    Module,
    tipo
    }).into('class')
}