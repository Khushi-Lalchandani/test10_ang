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
  @Input() select!: Image[];
  constructor(private imgService: ImageService) {}
  ngOnInit(): void {}
  onEmit() {
    this.showEdit.emit(false);
  }
  onInput($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.select[0].tag.push(this.tags);
      console.log(this.select, this.tags);
    }
  }
}
