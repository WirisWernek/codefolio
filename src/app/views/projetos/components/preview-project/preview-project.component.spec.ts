import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewProjectComponent } from './preview-project.component';

describe('PreviewProjectComponent', () => {
  let component: PreviewProjectComponent;
  let fixture: ComponentFixture<PreviewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
