
export interface IMessage{
    title:string;
    description:string;
    date:string;
    image:string;
}

export class Message implements IMessage{
    public title:string;
    public description:string;
    public date:string;
    public image:string;
}