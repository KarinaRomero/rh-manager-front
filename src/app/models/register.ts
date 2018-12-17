import { Login } from "./login";

export class Register {
    id: number;
    rfc: string;
    name: string;
    login: Login;
    company: string;

    Register()
    {
        this.id = 0;
        this.rfc = '';
        this.name = '';
        this.login = new Login();
        this.company = '';
    }
}