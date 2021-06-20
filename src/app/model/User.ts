import { IUser } from "./IUser";

export default class User implements IUser{
    constructor(
        public id: string,
        public familyName: string,
        public givenName: string,
        public password: string
    ) {}
}