import { Injectable } from '@angular/core';
import { ITask } from '../task/task';
import { IMessage } from '../message/message';
import { IActivity } from '../activity/activity';

@Injectable()
export class InfoService {

  tasks:ITask[]
  messages:IMessage[];
  tasksAlerts:number = 0;


 // constructor() {

   // this.initData();
  // }
  public addAlert(){
    this.tasksAlerts++;
  }
  public getTasksAlerts(){
    return this.tasksAlerts
  }
  public getActivitis():IActivity[]{
    return [
      {
        title:"Nina jones",
        date: "2018-01-25T10:14:22+0000",
        description :"Free Ui kit", 
        image:"https://randomuser.me/api/portraits/thumb/men/83.jpg" ,
        task:"add"
      },
      {
        title:"James smith",
        date: "2018-01-25T10:14:22+0000",
        description :"Free Ui kit", 
        image:"https://randomuser.me/api/portraits/thumb/men/84.jpg" ,
        task:"commite"
      },
      {
        title:"Alex jones",
        date: "2018-01-25T10:14:22+0000",
        description :"Free Ui kit", 
        image:"https://randomuser.me/api/portraits/thumb/men/85.jpg" ,
        task:"commite"
      },
      {
        title:"Alexsandra jones",
        date: "2018-01-25T10:14:22+0000",
        description :"Free Ui kit", 
        image:"https://randomuser.me/api/portraits/thumb/men/85.jpg" ,
        task:"add"
      },
      {
        title:"Boo jones",
        date: "2018-01-25T10:14:22+0000",
        description :"Free Ui kit", 
        image:"https://randomuser.me/api/portraits/thumb/men/85.jpg" ,
        task:"complete"
      },

    ]
  }
  public getMessages():IMessage[]{
    return [
      {
        title:"New Website for Symu.co",
        date: "2018-01-25T10:14:22+0000",
        description :"Hey you it's me again :) i attach new message for you to see what i w", 
        image:"https://randomuser.me/api/portraits/thumb/men/83.jpg" 
      },
      {
        title:"Free PSD for Sam.co",
        description :"Hey you it's me again :) i attach new (..)", 
        image:"https://randomuser.me/api/portraits/thumb/men/84.jpg",
        date: "2018-01-26T10:14:22+0000",
 
      },
      {
        title:"New LOGO for log.co",
        date: "2018-01-27T10:14:22+0000",
        description :"Hey you it's me again :) i attach new (..)", 
        image:"https://randomuser.me/api/portraits/thumb/men/85.jpg"  
      },
      {
        title:"Free Icons for Jo.co",
        date: "2017-01-29T17:24:22+0000",
        description :"Hey you it's me again :) i attach new (..)", 
        image:"https://randomuser.me/api/portraits/thumb/men/86.jpg" 
      },

    ]
  }
   public getTasks():ITask[]{
    return [
      {
        title:"New Website for Symu.co",
        date: "2017-01-29T17:24:22+0000",
        user:"K"  
      },
      {
        title:"Free PSD for Sam.co",
        date: "2018-02-05T17:24:22+0000",
        user:"N"  
      },
      {
        title:"New LOGO for log.co",
        date: "2018-01-27T12:24:22+0000",
        user:"N"  
      },
      {
        title:"Free Icons for Jo.co",
        date: "2018-01-25T10:14:22+0000",
        user:"M"  
      },

    ]//this.tasks;
   }

   initData(){
      
     



   }

}
