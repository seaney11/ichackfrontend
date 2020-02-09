import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {AnimationModel} from '../../animations/animation.model';
import {AnimationService} from '../../animations/animation.service';
import {Lesson} from '../lesson.model';
import {Mareki} from '../sentiment.model';
import {LessonService} from '../lesson.service';

@Component({
  selector: 'app-lession-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})
export class LessonViewComponent implements OnInit {

  animations: AnimationModel[];
  public readonly MIC_PORT: number = 5500;
  ws: any;
  lesson: Lesson;
  micStatus: string;
  sentiment_module: Mareki
  sentiment : string

  transcript: string;

  constructor(private lessonService: LessonService,
              private activatedRoute: ActivatedRoute) {
    this.transcript = '';
    this.sentiment = '';
  }

  ngOnInit(): void {
    this.ws = new WebSocket("ws://localhost:9001/");

    // Set event handlers.
    this.ws.onopen = () => {
      console.log("boom motherfuckers");
    };

    this.ws.onmessage = (e) => {
      if (e.data[0] != '0' ){
          this.transcript += e.data;
        }
      else{
          this.sentiment = e.data.substr(1);
      }
    };

    this.ws.onclose =  () => {
      console.log("closed");
    };
    this.activatedRoute.params.subscribe(params => {
        console.log(params);
        const id = params['id'];
        console.log(params);
          this.lessonService.getLesson(id).subscribe((res) => {
            this.lesson = res;
          });
      });
  }

}
