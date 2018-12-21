export class Employee {
    id: number;
    key: string;
    name: string;
    age: number;
    job: string;
    adress: string;
    skill_ids: any[];

    Employee()
    {
        this.id = 0;
        this.key = '';
        this.name = '';
        this.age = 0;
        this.job = '';
        this.adress = '';
        this.skill_ids =[];
    }
}