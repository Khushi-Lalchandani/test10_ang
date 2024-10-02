import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-edit-overlay',
  templateUrl: './edit-overlay.component.html',
  styleUrls: ['./edit-overlay.component.scss'],
})
export class EditOverlayComponent implements OnInit {
  tags!: [];
  @Output() showEdit = new EventEmitter<boolean>();

  constructor(private imgService: ImageService) {}
  ngOnInit(): void {}
  onEmit() {
    this.showEdit.emit(false);
  }
}
