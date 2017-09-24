import { Component, OnInit, Input } from '@angular/core';
import { shuffle } from '../util/shuffle';
import { QAPair } from '../util/qapair';


@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

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
