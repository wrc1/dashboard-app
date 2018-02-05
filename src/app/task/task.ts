

export interface ITask{
    title:string;
    date:string;
    user:string;
}

export class Task implements ITask{
    public title:string;
    public date:string;
    public user:string;
}