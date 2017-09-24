import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable/draggable.directive';

import { DragService } from './services/drag.service';
import { QAService } from './services/qa.service';

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
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [
    DragService,
    QAService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
