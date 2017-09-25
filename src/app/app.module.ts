import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { APP_BASE_HREF } from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';


import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable/draggable.directive';

import { DragService } from './services/drag.service';
import { QAService } from './services/qa.service';

import { DropTargetDirective } from './drop-target/drop-target.directive';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { RoundComponent } from './round/round.component';


@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DropTargetDirective,
    AnswerComponent,
    QuestionComponent,
    RoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    DragService,
    QAService,
    {provide: APP_BASE_HREF, useValue: '/hiranga'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
