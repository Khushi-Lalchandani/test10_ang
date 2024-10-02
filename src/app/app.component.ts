import { Component } from '@angular/core';
import { Image } from './format.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageUrl!: string;
  fileName!: string;
  uploading: boolean = false;
  showOverlay: boolean = false;
  imageDetails: Image[] = this.imgService.imageDetails;
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      this.fileName = file.name;
      this.imageUrl = URL.createObjectURL(file);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      this.fileName = file.name;
      this.imageUrl = URL.createObjectURL(file);
    }
  }

  appendData(url: string, tag: string) {
    this.imgService.imageDetails.push({ url: url, tag: tag });
  }
  onUpload() {
    this.uploading = true;

    setTimeout(() => {
      this.uploading = false;
      this.appendData(this.imageUrl, this.fileName);
      this.imageUrl = '';
    }, 4000);
  }
  onDelete() {
    this.fileName = '';
    this.imageUrl = '';
  }
  onToggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }
  constructor(private imgService: ImageService) {}
}
