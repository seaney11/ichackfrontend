import { Component, OnInit } from '@angular/core';
import {AnimationModel} from '../../animations/animation.model';
import {AnimationService} from '../../animations/animation.service';
import {Lesson} from '../lesson.model';
import {LessonService} from '../lesson.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-lesson',
  templateUrl: './start-lesson.component.html',
  styleUrls: ['./start-lesson.component.css']
})
export class StartLessonComponent implements OnInit {

  animations: AnimationModel[];
  lessonName: string;
  selectedAnimations = {};

  constructor(private animationService: AnimationService,
              private lessonService: LessonService,
              private router: Router) { }

  ngOnInit(): void {
    this.animationService.getAnimations().subscribe((res) => {
      this.animations = res;
    });
  }

  toggleSelected(i): void {
    if (i in this.selectedAnimations && this.selectedAnimations[i] === true) {
      this.selectedAnimations[i] = false;
    } else {
      this.selectedAnimations[i] = true;
    }
  }

  startLesson(): void {
    const chosenAnimations = [];
    for (let i = 0; i < this.animations.length; i++) {
      if (i in this.selectedAnimations && this.selectedAnimations[i] === true){
        chosenAnimations.push(this.animations[i].id);
      }
    }
    const lesson: Lesson = {
      name: this.lessonName,
      ip: 'test',
      port: 1000,
      animations: chosenAnimations,
    };
    this.lessonService.createLesson(lesson).subscribe( (l) => {
      this.router.navigate(['/lesson-view/',  l.id]);
    });
  }

}
