import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../format.model';

@Component({
  selector: 'app-edit-overlay',
  templateUrl: './edit-overlay.component.html',
  styleUrls: ['./edit-overlay.component.scss'],
})
export class EditOverlayComponent implements OnInit {
  tags!: string;
  @Output() showEdit = new EventEmitter<boolean>();
  @Output() emitImage = new EventEmitter<Image>();
  @Input() select!: Image[];
  constructor(private imgService: ImageService) {}
  ngOnInit(): void {}
  onEmit() {
    this.showEdit.emit(false);
  }

  emitSelectedImage() {
    if (this.tags) {
      this.select[0].tag.push(this.tags);
    }
    this.emitImage.emit(this.select[0]);
  }
  emitDeletedImage(tagToRemove: string) {
    if (tagToRemove) {
      this.select[0].tag = this.select[0].tag.filter(
        (tag) => tag !== tagToRemove
      );
    }
  }
}
