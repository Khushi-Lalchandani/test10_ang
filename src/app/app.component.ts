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
  imageDetails!: Image[];
  showEditOverlay: boolean = false;
  selectedImage!: Image[];

  ngOnInit(): void {
    this.imgService.detectChange.next(false);
    this.imgService.detectChange.subscribe((changed) => {
      if (changed) {
        this.uploadChanges();
      }
    });
    this.imgService.getImages().subscribe((images) => {
      this.imageDetails = images;
      this.imgService.originalImageDetails = images;
    });
  }
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
    this.imgService.originalImageDetails.push({
      url: url,
      name: name,
      tag: tag,
    });
    this.imgService.detectChange.next(true);
  }
  onUpload(tag: string) {
    this.uploading = true;

    const tag2 = tag.split(',');
    // console.log(tag2);
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
  getUpdatedImage($event: Image) {
    this.selectedImage = [$event];
    // console.log(this.selectedImage);
    this.imageDetails = this.imageDetails.map((i) => {
      if (i.url === this.selectedImage[0].url) {
        return { ...i, ...this.selectedImage[0] };
      }
      return i;
    });
    this.detectChanges();
    this.showEditOverlay = false;
  }

  detectChanges() {
    this.imgService.detectChange.next(true);
  }
  uploadChanges() {
    this.imgService.updateImageDetails(this.imageDetails).subscribe(
      (response) => {
        console.log('Updated successfully', response);
      },
      (error) => {
        console.error('Error updating data', error);
      }
    );
  }
  constructor(private imgService: ImageService) {}
}
