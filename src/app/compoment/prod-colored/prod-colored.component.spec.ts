import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdColoredComponent } from './prod-colored.component';

describe('ProdColoredComponent', () => {
  let component: ProdColoredComponent;
  let fixture: ComponentFixture<ProdColoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdColoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
