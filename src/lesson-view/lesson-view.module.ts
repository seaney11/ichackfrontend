import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonViewComponent } from './lesson-view/lesson-view.component';
import { StartLessonComponent } from './start-lesson/start-lesson.component';
import {LessonViewRoutingModule} from "./lesson-view-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [LessonViewComponent, StartLessonComponent],
    imports: [
        CommonModule,
        LessonViewRoutingModule,
        FormsModule
    ]
})
export class LessonViewModule { }
