import {Component, OnInit} from '@angular/core';
import * as SocketIO from "socket.io";

@Component({
  selector: 'app-lession-view',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})
export class LessonViewComponent implements OnInit {

  public readonly MIC_PORT: number = 5500;
  private micServer: SocketIO.Server;


  micStatus: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
