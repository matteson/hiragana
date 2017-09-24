import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-answer-component',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input()
  correctID: string;
  @Input()
  char = '';

  @Output()
  emitCorrect = new EventEmitter();

  answered = false;

  ngOnInit() {
  }

  onDrop(droppedData: string) {

    console.log(droppedData);

    if (droppedData === this.correctID) {
      this.answered = true;
      this.emitCorrect.emit(true);
    } else {
      this.emitCorrect.emit(false);
    }

  }

  getChar(): string {
    if (this.answered) {
      return this.char;
    } else {
      return '';
    }
  }

  markFalse() {
    this.answered = false;
  }

}
