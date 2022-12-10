export interface loginResponse {
        Code: number,
        Response: string,
        email_Usuario: string,
        id_Rol: number,
        id_Tenant: number,
        id_Usuario: number,
        nombre_Rol: string,
        nombre_Tenant: string,
        nombre_Usuario: string
}

export interface usuarioLogin {
        email: string,
        password: string
}

export interface usuarioOpMenu {
        tenant: number
        email: string
}

export interface opMenuItemRes {
        id_Tenant: number
        email_Usuario: string
        id_Modulo: number
        nombre_Modulo: string
        id_OpMenu: number
        nombre_OpMenu: string
        url_OpMenu: string
}

export interface opMenuItemsRes extends Array<opMenuItemRes>{}

export interface opMenuItem {
        url: string
        name: string
}

export interface opMenuItems 
{
        menuName: string
        subMenus: opMenuItem[] 
}

export interface getRol
{
        id_Rol: number
}

export interface loadModulo
{
        id_Modulo: string,
        nombre_Modulo: string
}

export interface loadModuloRes extends Array<loadModulo>{} 