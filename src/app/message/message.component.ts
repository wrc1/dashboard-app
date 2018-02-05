import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { IMessage } from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() myMessage:IMessage;
  @Output() readMessageEmiter = new EventEmitter<any>();
  @Output() titleEimter:EventEmitter<string> = new EventEmitter<string>();
  public isMessageRead:boolean;
  constructor() { 
    this.isMessageRead = false;
  }

  ngOnInit() {

    this.titleEimter.emit("Messages");
    // console.log(this.myMessage)
  }

  public readeMessage(){

      this.isMessageRead = true;
      this.readMessageEmiter.emit()
  }

}
