import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacoesComponent } from './atualizacoes.component';

describe('AtualizacoesComponent', () => {
  let component: AtualizacoesComponent;
  let fixture: ComponentFixture<AtualizacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
