import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonViewComponent} from "./lesson-view/lesson-view.component";
import {StartLessonComponent} from "./start-lesson/start-lesson.component";


const routes: Routes = [{path: 'lesson-view/:id', component: LessonViewComponent},
  {path: 'start-lesson', component: StartLessonComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonViewRoutingModule { }
