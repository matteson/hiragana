import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { shuffle } from '../util/shuffle';
import { QAPair } from '../util/qapair';

import {AnswerComponent} from '../answer/answer.component';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  @ViewChildren(AnswerComponent) answerComponents: QueryList<AnswerComponent>;

  _inputList: QAPair[];
  get inputList(): QAPair[] {
    return this._inputList;
  }

  @Input()
  set inputList(value: QAPair[]) {
    this._inputList = value;
    this.initQA();
  }

  answerList: QAPair[] = [];
  questionList: QAPair[] = [];

  constructor() {

  }

  initQA() {
    if (this.answerComponents) {
      // manually mark to false any components that might be reused between previous and next lists
      this.answerComponents.forEach((item) => item.markFalse());
    }

    this.answerList = this.inputList;
    this.questionList = shuffle(
      this.answerList
        .slice(0, this.answerList.length)
    );
  }

  onCorrect(success: boolean, toRemove: string) {
    if (success) {
      const idx = this.questionList.findIndex((item) => item.id === toRemove);
      this.questionList.splice(idx, 1);
    }
  }

  ngOnInit() {

  }

}
