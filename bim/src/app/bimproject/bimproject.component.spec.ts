import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIMProjectComponent } from './bimproject.component';

describe('BIMProjectComponent', () => {
  let component: BIMProjectComponent;
  let fixture: ComponentFixture<BIMProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BIMProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BIMProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
