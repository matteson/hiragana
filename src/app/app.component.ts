import { Component, OnInit } from '@angular/core';
import { QAService } from './services/qa.service';
import { QAPair } from './util/qapair';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  currentRound: QAPair[] = [];

  constructor(private qaService: QAService) {

  }

  ngOnInit() {

    const n = 5;
    this.currentRound = this.qaService.getNRandomHirangaPairs(n);
  }
}


