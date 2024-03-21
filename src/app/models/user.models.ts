export interface CreateUserDTO{
        firstName: string,
        lastName: string,
        email: string,
        password: string     
}

export interface LoginDTO{
    email:string,
    password:string
}

export interface MessageDTO{
    names:string,
    email:string,
    message:string
}