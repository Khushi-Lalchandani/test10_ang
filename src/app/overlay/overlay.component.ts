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
  imageDetails!: Image[];
  @Output() emitDetails = new EventEmitter<Image[]>();
  @Output() show = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.imgService.getImages().subscribe((images) => {
      this.imageDetails = images;
    });
  }
  deleteImage(url: any) {
    this.show.emit(false);
    this.imgService.deleteImage(url);
    this.imageDetails = [...this.imgService.originalImageDetails];
    this.imgService.updateImageDetails(this.imageDetails).subscribe(() => {
      this.emitDetails.emit(this.imageDetails);
    });
  }

  onEmit() {
    this.show.emit(false);
  }
  constructor(private imgService: ImageService) {}
}
