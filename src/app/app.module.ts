import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayComponent } from './overlay/overlay.component';
import { FormsModule } from '@angular/forms';
import { TagPipe } from './tag.pipe';

@NgModule({
  declarations: [AppComponent, OverlayComponent, TagPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
