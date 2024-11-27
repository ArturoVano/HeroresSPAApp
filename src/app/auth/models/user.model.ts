import { Alignment } from "src/app/models/aligment.model";

export interface User {
    id: number;
    username?: string;
    email?: string;
    password?: string;
    preference?: Alignment;
}