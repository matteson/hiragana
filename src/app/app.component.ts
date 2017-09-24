import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  answerList: QAPair[] = [];
  questionList: QAPair[] = [];

  onCorrect(success: boolean, toRemove: string) {
    if (success) {
      const idx = this.questionList.findIndex((item) => item.id === toRemove);
      this.questionList.splice(idx, 1);
    }
  }

  ngOnInit() {
    this.answerList = [
      {
        char: '&#x3041;',
        id: 'o'
      },
      {
        char: '&#x3044;',
        id: 'i'
      }
    ];

    this.questionList = [
      {
        char: '&#x3041;',
        id: 'o'
      },
      {
        char: '&#x3044;',
        id: 'i'
      }
    ];
  }
}

export interface QAPair {
  char: string;
  id: string;
}
