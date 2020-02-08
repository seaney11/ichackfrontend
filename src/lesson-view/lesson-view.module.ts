import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessionViewComponent } from './lession-view/lession-view.component';
import { StartLessonComponent } from './start-lesson/start-lesson.component';
import {LessonViewRoutingModule} from "./lesson-view-routing.module";



@NgModule({
  declarations: [LessionViewComponent, StartLessonComponent],
  imports: [
    CommonModule,
    LessonViewRoutingModule
  ]
})
export class LessonViewModule { }
