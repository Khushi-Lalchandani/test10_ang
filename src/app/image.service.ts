import { Injectable, OnInit } from '@angular/core';
import { Image } from './format.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ImageService implements OnInit {
  detectChange = new Subject<boolean>();
  imageDetails: Image[] = [
    {
      url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: ['nature'],
    },
    {
      url: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: ['nature', 'girl', 'brown'],
    },
    {
      url: 'https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg?auto=compress&cs=tinysrgb&w=600',
      tag: ['nature'],
    },
  ];

  ngOnInit(): void {
    this.uploadData();
  }
  uploadData() {
    return this.http.post(
      'https://image-gallery-d6ccb-default-rtdb.firebaseio.com/json',
      this.imageDetails
    );
  }

  constructor(public http: HttpClient) {}
}
