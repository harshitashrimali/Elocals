import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOutlineComponent } from './prod-outline.component';

describe('ProdOutlineComponent', () => {
  let component: ProdOutlineComponent;
  let fixture: ComponentFixture<ProdOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
