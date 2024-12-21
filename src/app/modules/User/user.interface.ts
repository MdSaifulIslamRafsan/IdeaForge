import { UserRole } from "./user.constant";

export interface IUser {
    name: string;
    email: string;
    password : string;
    role: "admin" | "user",
    isBlocked: boolean;
}

export type TUserRole =  keyof typeof UserRole;