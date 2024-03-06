import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPAsswordComponent } from './new-password.component';

describe('NewPAsswordComponent', () => {
  let component: NewPAsswordComponent;
  let fixture: ComponentFixture<NewPAsswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPAsswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPAsswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
