import { Role } from './role';

export class Account {
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    photo?:File;
    role?: Role;
    jwtToken?: string;
}