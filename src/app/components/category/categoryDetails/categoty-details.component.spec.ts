import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyDetailsComponent } from './categoty-details.component';

describe('CategotyDetailsComponent', () => {
  let component: CategotyDetailsComponent;
  let fixture: ComponentFixture<CategotyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategotyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategotyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
