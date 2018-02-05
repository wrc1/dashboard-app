import { Component, OnInit, Input } from '@angular/core';
import { InfoService } from './info.service';
import { ITask } from '../task/task';
import { IMessage } from '../message/message';
import { IActivity } from '../activity/activity';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() opration: string;
  public tasks: ITask[];
  public messages: IMessage[];
  public activitis: IActivity[];
  public listNumber: number;
  public componentTitle: string;
  public isAlert: boolean;
  public alertNumber: number;
  public unReadMessages:number;

  constructor(private infoServeice: InfoService) {
    this.isAlert = false;
    this.alertNumber = 0;
    this.listNumber = 0;
    this.unReadMessages = 0;
  }
  ngOnInit() {

    //console.log(this.opration)
    let oper = this.opration;
    if (oper == "tasks") {
      this.tasks = this.infoServeice.getTasks();
      this.listNumber = this.tasks.length;
      this.alertNumber = this.infoServeice.getTasksAlerts();
    }
    if (oper == "messages") {
      this.messages = this.infoServeice.getMessages();
      this.listNumber += this.messages.length;
    }
    if (oper == "activitis") {
      this.activitis = this.infoServeice.getActivitis();
      this.listNumber = this.activitis.length;
    }
  }

  eventTitle(name: string): void {
    if (name) {
      this.componentTitle = name;
    }
  }
  onUpdateListMessages():void{
    if(this.listNumber > 0){
      this.listNumber--;
    }
  }
  eventAlert(alertNum: number): void {
   
      this.alertNumber = this.infoServeice.getTasksAlerts();
  


  }
}
