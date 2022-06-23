export type Class ={
    Id_Class:number,
    Class_Name:string,
    Initial_Date:string,
    Final_Date:string,
    Module:number,
    tipo: TYPE_CLASS
}


export enum TYPE_CLASS {
    INTEGRAL = "integral",
    NOTURNA = "noturna",
}

export enum Modules {
    mod0 = 0, 
    mod1 = 1,
    mod2 = 2,
    mod3 = 3,
    mod4 = 4,
    mod5 = 5,
    mod6 = 6,
    mod7 = 7
} 