import { Injectable } from '@angular/core';
import {Animation} from "./animation.model";

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() {}

  getAnimations(): Animation[] {
    return [{id: 0, name: 'test', content: {}},
    {id: 1, name: 'test1', content: {}},
    {id: 2, name: 'test2', content: {}},
    {id: 3, name: 'test3', content: {}}];
  }
}
