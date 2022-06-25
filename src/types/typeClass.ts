import { estudantes } from "./typeStudents";
import { teachers } from "./typeTeacher";

export type Class = {
  id?: number;
  Class_Name: string;
  Initial_Date: string;
  Final_Date: string;
  Module: number;
  tipo: TYPE_CLASS;
  teachers: teachers[];
  students: estudantes[];
};

export enum TYPE_CLASS {
  INTEGRAL = "INTEGRAL",
  NOTURNO = "NOTURNO",
}

export enum Modules {
  mod0 = 0,
  mod1 = 1,
  mod2 = 2,
  mod3 = 3,
  mod4 = 4,
  mod5 = 5,
  mod6 = 6,
  mod7 = 7,
}
