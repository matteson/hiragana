import { Component, OnInit } from '@angular/core';
import { QAService } from './services/qa.service';
import { shuffle } from './util/shuffle';
import { QAPair } from './util/qapair';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  answerList: QAPair[] = [];
  questionList: QAPair[] = [];

  constructor(private qaService: QAService) {

  }

  onCorrect(success: boolean, toRemove: string) {
    if (success) {
      const idx = this.questionList.findIndex((item) => item.id === toRemove);
      this.questionList.splice(idx, 1);
    }
  }

  ngOnInit() {

    const n = 5;
    this.answerList = this.qaService.getNRandomHirangaPairs(n);
    this.questionList = shuffle(this.answerList.slice(0, n));
  }
}


