import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IActivity } from './activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() myActivity:IActivity
  @Output() titleEimter:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.titleEimter.emit("Activitis");
    //console.log(this.myActivity)
  }

}
