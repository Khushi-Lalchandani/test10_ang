import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  @Output() show = new EventEmitter<boolean>();
  emit() {
    this.show.emit(false);
  }
  onDelete() {}
  constructor(private imgService: ImageService) {}
}
