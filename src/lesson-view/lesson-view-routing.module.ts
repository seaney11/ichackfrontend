import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessionViewComponent} from "./lession-view/lession-view.component";
import {StartLessonComponent} from "./start-lesson/start-lesson.component";


const routes: Routes = [{path: 'lesson-view', component: LessionViewComponent},
  {path: 'start-lesson', component: StartLessonComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonViewRoutingModule { }
