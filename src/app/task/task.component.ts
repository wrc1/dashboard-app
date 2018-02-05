import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { ITask } from './task';
import * as moment from 'moment'; // add this 1 of 4
import { InfoService } from '../sherd/info.service';


export enum Time { 
  Houres = 0,
  Minutes = 0,
  Days = 0,
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  
  @Input() myTask:ITask
  @Output() titleEimter = new EventEmitter<string>();
  @Output() alertEmiter = new EventEmitter<any>();
  private taskArrivel:string;
  private componentName:string;
  private myTime:Time;
  private isTimePass:boolean;
  private taskNewTime:any;
  private alertNumber:number = 1;
    

  constructor(private infoService:InfoService) { 
    this.isTimePass = false;
  }

  ngOnInit() {
   // this.componentName = "";
   this.titleEimter.emit("Task");  

    this.taskNewTime =  this.calculateTaskTime();
    if(this.isTimePass){
        this.infoService.addAlert();
        this.alertEmiter.emit();

    }
  }
  private getIsTimePass(){
      //this.alertEmiter.emit(1);
    
  }
  public getTimeClass(){
    if(moment().isAfter(this.myTask.date)){
     // this.alertEmiter.emit(1);
     //console.log(true);
    // this.getIsTimePass();
      return "alertTime";
    }
     console.log(true);

    return "normalTime";
  }
  

  private calculateTaskTime(){
    let now = moment().format();
    let expiration = moment(this.myTask.date);
    let diff = expiration.diff(now);
    let diffDuration = moment.duration(diff);
     
      if(moment().isAfter(this.myTask.date)){
        this.isTimePass = true;
        if(diffDuration.days() > 0){
          return  Math.abs(diffDuration.days()).toString() +
           " days ago";
        }else{
          if(diffDuration.hours() > 0) {
            return Math.abs(diffDuration.hours())+ 
            " Hours ago";
          }
          return Math.abs(diffDuration.minutes()).toString()
          + " Minutes ago";
          // console.log(moment(diff).format('hh:mm:ss'))
          // return moment(diff).format('hh:mm:ss')
        }
        //return this.displyTime();
       
      }else{
        this.isTimePass = false;
        //return this.displyTime();
        if(diffDuration.days() > 0){
          return  diffDuration.days().toString() +
           "days left";
        }else{
          if(diffDuration.hours() > 0) {
            return diffDuration.hours() + 
            "Hours left";
          }
          return diffDuration.minutes().toString()
          + "Minutes left";
          // console.log(moment(diff).format('hh:mm:ss'))
          // return moment(diff).format('hh:mm:ss')
        }

      }
     

  }
  private displyTime(){
    let now = moment().format();
    let expiration = moment(this.myTask.date);
    let diff = expiration.diff(now);
    let diffDuration = moment.duration(diff);
    if(diffDuration.days() > 0){
      return diffDuration.days().toString();
    }
  }


}
