import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayComponent } from './overlay/overlay.component';
import { FormsModule } from '@angular/forms';
import { TagPipe } from './tag.pipe';
import { EditOverlayComponent } from './edit-overlay/edit-overlay.component';

@NgModule({
  declarations: [AppComponent, OverlayComponent, TagPipe, EditOverlayComponent],
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
