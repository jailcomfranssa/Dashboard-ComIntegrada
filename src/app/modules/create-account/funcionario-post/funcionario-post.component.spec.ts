import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioPostComponent } from './funcionario-post.component';

describe('FuncionarioPostComponent', () => {
  let component: FuncionarioPostComponent;
  let fixture: ComponentFixture<FuncionarioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
