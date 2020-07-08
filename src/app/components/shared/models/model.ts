export interface HeaderVar {
    numeroMensajes?: number;
    numeroNotificaciones?: number;
    numeroFichajes?: number;
    numeroTareas?: number;
    nombreUser?: string;
    cargoUser?: string;
    imagenUser?: string;
}
export interface Mensaje {
    remitente?: string;
    imagenRemitente?: string;
    fecha?: Date;
    textoFecha?: string;
    mensaje?: string;
}
export interface Cliente {
    idCliente?: number;
    nombre?: string;
    direccion?: string;
    cp?: number;
    municipio?: string;
    provincia?: string;
    tel1?: number;
    tel2?: number;
    tel3?: number;
    email?: string;
    fechaCreacion?: Date;
    proceso?: string;
};
export interface UserPass {
    token?:string;
    idUserpass?: number;
    email?: string;
    pass?: string;
    roleUser?: string;
    idUserApp?: string;
    fechaCreacion?: Date;
    proceso?: string;
};
export interface Token {
    token: string;
    idUserpass?: number;
    roleUser?: string;
    idUserApp?: string;
}