import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable/draggable.directive';

import { DragService } from './services/drag.service';
import { DropTargetDirective } from './drop-target/drop-target.directive';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DropTargetDirective,
    AnswerComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DragService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
