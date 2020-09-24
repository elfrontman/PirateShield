import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
})
export class ModalImageComponent implements OnInit {

  @Input() image;
  @Output() close = new EventEmitter();

  constructor() { }

  closeView() {
    this.close.emit(true);
  }
  ngOnInit() {}

}
