import { Alignment } from "src/app/models/aligment.model";

export interface FormDataUser {
    username?: string;
    email?: string;
    password?: string;
    preference?: Alignment;
}

export interface User extends FormDataUser{
    id?: number;
}