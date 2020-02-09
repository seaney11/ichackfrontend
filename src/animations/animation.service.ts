import { Injectable } from '@angular/core';
import {AnimationModel} from './animation.model';
import {apiRootUrl} from "../settings";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../lesson-view/lesson.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  private animationUrl: string = apiRootUrl + '/animations/';

  constructor(private http: HttpClient) { }

  getAnimations(): Observable<AnimationModel[]> {
    return this.http.get<AnimationModel[]>(this.animationUrl);
  }

  createAnimation(animation: AnimationModel): Observable<AnimationModel> {
    return this.http.post<AnimationModel>(this.animationUrl, animation)
}

}
