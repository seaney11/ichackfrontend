import {Component, OnInit} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Component({
  selector: 'app-lession-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})
export class LessonViewComponent implements OnInit {

  public readonly MIC_PORT: number = 5500;
  ws: any;

  micStatus: string;

  transcript: string;

  constructor() {
    this.transcript = '';
  }

  ngOnInit(): void {
    this.ws = new WebSocket("ws://localhost:9001/");

    // Set event handlers.
    this.ws.onopen = () => {
      console.log("boom motherfuckers");
    };

    this.ws.onmessage = (e) => {
      this.transcript += e.data;
    };

    this.ws.onclose =  () => {
      console.log("closed");
    };

  }

}
