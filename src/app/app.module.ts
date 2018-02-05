import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FusionChartsModule } from 'angular4-fusioncharts';

import {InfoService} from './sherd/info.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InfoComponent } from './sherd/info.component';
import { TaskComponent } from './task/task.component';
import { MessageComponent } from './message/message.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    InfoComponent,
    TaskComponent,
    MessageComponent,
    ActivityComponent,
    
  ],
  imports: [
    BrowserModule,
    FusionChartsModule

  ],
  providers: [InfoService],

  bootstrap: [AppComponent]
})
export class AppModule { }
