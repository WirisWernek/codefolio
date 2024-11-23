import { Component, inject, input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../../models/project.model';
import { PreviewProjectComponent } from '../preview-project/preview-project.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  project = input.required<Project>();

  private readonly modalService = inject(NgbModal);

  showPreview() {
    const modalRef = this.modalService.open(PreviewProjectComponent, {
      centered: true,
      size: 'lg',
      modalDialogClass: 'custom-modal',
    });
    if (modalRef.componentInstance)
      modalRef.componentInstance.img = this.project().thumb;
  }
}
