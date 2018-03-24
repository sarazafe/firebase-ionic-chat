/**
 * User of the chat
 */
export class User {
    uid: string;
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}