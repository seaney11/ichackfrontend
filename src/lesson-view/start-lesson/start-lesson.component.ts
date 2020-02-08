import { Component, OnInit } from '@angular/core';
import {AnimationsService} from '../../animations/animations.service';
import {Animation} from '../../animations/animation.model';

@Component({
  selector: 'app-start-lesson',
  templateUrl: './start-lesson.component.html',
  styleUrls: ['./start-lesson.component.css']
})
export class StartLessonComponent implements OnInit {

  animations: Animation[];

  constructor(private animationService: AnimationsService) { }

  ngOnInit(): void {
    this.animations = this.animationService.getAnimations();
  }

}
