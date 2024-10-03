import { Component, Input, OnInit } from '@angular/core';
import { Image } from './format.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  imageUrl!: string;
  nameOfImage!: string;
  tag!: string;
  fileName!: string;
  uploading: boolean = false;
  showOverlay: boolean = false;
  imageDetails: Image[] = this.imgService.imageDetails;
  showEditOverlay: boolean = false;
  selectedImage!: Image[];

  ngOnInit(): void {}
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  show(image: Image) {
    this.showOverlay = true;
    this.selectedImage = [image];
  }
  showEdit(image: Image) {
    this.showEditOverlay = true;
    this.selectedImage = [image];
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

  appendData(url: string, name: string, tag: string[]) {
    this.imgService.imageDetails.push({ url: url, name: name, tag: tag });
  }
  onUpload(tag: string) {
    this.uploading = true;

    const tag2 = tag.split(',');
    console.log(tag2);
    setTimeout(() => {
      this.uploading = false;
      this.appendData(this.imageUrl, this.nameOfImage, tag2);
      this.imageUrl = '';
    }, 4000);
  }
  onDelete() {
    this.fileName = '';
    this.imageUrl = '';
  }

  constructor(private imgService: ImageService) {}
}
