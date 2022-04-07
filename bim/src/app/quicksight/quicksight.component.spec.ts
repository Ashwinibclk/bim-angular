import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksightComponent } from './quicksight.component';

describe('QuicksightComponent', () => {
  let component: QuicksightComponent;
  let fixture: ComponentFixture<QuicksightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicksightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
