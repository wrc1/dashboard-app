
export interface IActivity{
    title:string;
    task:string;
    description:string;
    date:string;
    image:string;
}

export class Activity implements IActivity{
    public title:string;
    public task:string;
    public description:string;
    public date:string;
    public image:string;
}