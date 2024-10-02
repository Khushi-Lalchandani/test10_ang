import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOverlayComponent } from './edit-overlay.component';

describe('EditOverlayComponent', () => {
  let component: EditOverlayComponent;
  let fixture: ComponentFixture<EditOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditOverlayComponent]
    });
    fixture = TestBed.createComponent(EditOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
