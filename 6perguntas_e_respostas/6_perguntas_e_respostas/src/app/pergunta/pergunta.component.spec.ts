import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaComponent } from './pergunta.component';

describe('PerguntaComponent', () => {
  let component: PerguntaComponent;
  let fixture: ComponentFixture<PerguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerguntaComponent]
    });
    fixture = TestBed.createComponent(PerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
