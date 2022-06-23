import connection from "../connection";
import { TYPE_CLASS } from "../types/typeClass";

export default async function insertClass(
    Id_Class: number,
    Class_Name: string,
    Initial_Date: string,
    Final_Date:string,
    Module:number,
    tipo: TYPE_CLASS
) {
    await connection.insert({
    Id_Class,
    Class_Name ,
    Initial_Date,
    Final_Date,
    Module,
    tipo
    }).into('class')
}