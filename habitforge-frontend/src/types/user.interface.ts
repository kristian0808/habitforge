export interface User {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}



export interface CreatedUserDto {
    email: string;
    name: string;
    password: string
}

export interface LoginDto {
    eamil: string;
    password: string;
}