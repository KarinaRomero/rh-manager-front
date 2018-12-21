
export class User {
    name: string;
    rfc: string;
    company: string;
    email: string;
    password: string;
    //password_confirmation: string;


    Register()
    {
        this.rfc = ' ';
        this.name = ' ';
        this.email = ' ';
        this.company = ' ';
        this.password = ' ';
        //this.password_confirmation = ' ';
    }
}