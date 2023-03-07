export interface Gastos {
    id?:string,
    categoria: string,
    date:Date,
    descripcion:string,
    monto:number,
    producto:string,
    tasa_de_cambio:number
}
