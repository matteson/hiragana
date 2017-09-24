import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';
import {DragService} from '../services/drag.service';

@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {

  private options: DropTargetOptions = {};
  @Output() dropEmitter = new EventEmitter();

  @Input()
  set appDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  constructor(private dragService: DragService) {
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone' } = this.options;

    if (this.dragService.accepts(zone)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data =  JSON.parse(event.dataTransfer.getData('Text'));
    this.dropEmitter.emit(data);
  }
}

export interface DropTargetOptions {
  zone?: string;
}
