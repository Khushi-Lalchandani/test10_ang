import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../format.model';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  @Input() select!: Image[];
  imageDetails: Image[] = this.imgService.getImages();
  @Output() emitDetails = new EventEmitter<Image[]>();
  @Output() show = new EventEmitter<boolean>();
  ngOnInit(): void {}
  deleteImage(name: any, url: any) {
    this.show.emit(false);

    this.imageDetails = this.imgService.deleteImage(name, url);
    this.emitDetails.emit(this.imageDetails);
  }
  onEmit() {
    this.show.emit(false);
  }
  constructor(private imgService: ImageService) {}
}
