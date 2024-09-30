import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageUrl!: string;
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  onDragOver(event: DragEvent) {
    // console.log(event.dataTransfer?.files);
  }
  onDrop(event: DragEvent) {
    // console.log(event);
    console.log(event.dataTransfer?.files);
  }
  imageDetails: { url: string; tag: string }[] = [
    {
      url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'nature',
    },
    {
      url: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'nature',
    },
    {
      url: 'https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: 'nature',
    },
  ];
}
