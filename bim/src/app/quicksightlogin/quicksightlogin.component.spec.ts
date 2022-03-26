import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksightloginComponent } from './quicksightlogin.component';

describe('QuicksightloginComponent', () => {
  let component: QuicksightloginComponent;
  let fixture: ComponentFixture<QuicksightloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicksightloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksightloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
