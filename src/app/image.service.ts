import { Injectable, OnInit } from '@angular/core';
import { Image } from './format.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ImageService implements OnInit {
  detectChange = new Subject<boolean>();
  originalImageDetails!: Image[];
  // originalImageDetails: Image[] = [
  //   {
  //     url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     name: 'nature',
  //     tag: ['nature'],
  //   },
  //   {
  //     url: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     name: 'nature',

  //     tag: ['nature', 'girl', 'brown'],
  //   },
  //   {
  //     url: 'https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=600',
  //     name: 'nature',

  //     tag: ['nature'],
  //   },
  // ];

  ngOnInit(): void {
    this.uploadData();
  }

  uploadData() {
    return this.http.post(
      'https://image-gallery-d6ccb-default-rtdb.firebaseio.com/json',
      this.originalImageDetails
    );
  }
  updateImageDetails(updatedImages: Image[]): Observable<any> {
    return this.http.put(
      'https://image-gallery-d6ccb-default-rtdb.firebaseio.com/json.json',
      updatedImages
    );
  }

  getImages() {
    return this.http.get<Image[]>(
      'https://image-gallery-d6ccb-default-rtdb.firebaseio.com/json.json'
    );
  }
  deleteImage(url: string) {
    this.originalImageDetails = this.originalImageDetails.filter(
      (image: Image) => {
        return image.url !== url;
      }
    );
    return this.originalImageDetails;
  }
  constructor(public http: HttpClient) {}
}
