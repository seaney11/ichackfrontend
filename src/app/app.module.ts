import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GlobalModule} from '../global/global.module';
import {DashboardModule} from '../dashboard/dashboard.module';
import {LessonViewModule} from '../lesson-view/lesson-view.module';
import {AnimationsModule} from '../animations/animations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    DashboardModule,
    LessonViewModule,
    AnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
