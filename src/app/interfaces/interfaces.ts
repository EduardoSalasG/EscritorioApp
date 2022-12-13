export interface loginResponse {
        Code: number,
        Response: string,
        email_Usuario: string,
        id_Rol: number,
        id_Tenant: number,
        id_Usuario: number,
        nombre_Rol: string,
        nombre_Tenant: string,
        nombre_Usuario: string,
        token: string
}

export interface loginResponse1{
        Code: number,
        Response: string,
        token: string,

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
        id_Modulo: number,
        nombre_Modulo: string
}

export interface loadModuloRes extends Array<loadModulo>{} 

export interface loadMenu
{
        id_OpMenu: number,
        nombre_OpMenu: string,
        url_OpMenu: string,
        id_Modulo: number,
}

export interface loadMenuRes extends Array<loadMenu>{} 


export interface userDecoded 
{  
        id_Usuario: number,
        nombre_Usuario: string,
        id_Tenant: number,
        nombre_Tenant: string,
        id_Rol: number,
        nombre_Rol: string
}

export interface modulov1
{
        id_Modulo: number,
        nombre_Modulo: string,
        submenus : menu1[]
}

export interface modulosv1 extends Array<modulov1>{} 

export interface menu1
{
        id_OpMenu: number,
        nombre_OpMenu: string,
        url_OpMenu: string,
        id_Modulo: number,
}

export interface getRolesByTenantRes extends Array<getRolesByTenant>{}

export interface getRolesByTenant
{
        id_Rol: number,
        nombre_Rol: string
}

export interface updateRolByIdUsuario 
{
        status: string
}