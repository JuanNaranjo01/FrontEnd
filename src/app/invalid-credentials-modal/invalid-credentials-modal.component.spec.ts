import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidCredentialsModalComponent } from './invalid-credentials-modal.component';

describe('InvalidCredentialsModalComponent', () => {
  let component: InvalidCredentialsModalComponent;
  let fixture: ComponentFixture<InvalidCredentialsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidCredentialsModalComponent]
    });
    fixture = TestBed.createComponent(InvalidCredentialsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
