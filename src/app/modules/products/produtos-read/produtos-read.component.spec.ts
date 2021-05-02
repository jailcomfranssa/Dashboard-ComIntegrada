import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosReadComponent } from './produtos-read.component';

describe('ProdutosReadComponent', () => {
  let component: ProdutosReadComponent;
  let fixture: ComponentFixture<ProdutosReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
