import { Injectable } from '@angular/core';
import {Lesson} from "./lesson.model";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {apiRootUrl} from "../settings";

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private lessonUrl: string = apiRootUrl + '/lessons/';

  constructor(private http: HttpClient) { }

  createLesson(lesson: Lesson): Observable<Lesson>{
    return this.http.post<Lesson>(this.lessonUrl, lesson);
  }
}
