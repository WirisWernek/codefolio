import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preview-project',
  standalone: true,
  imports: [],
  templateUrl: './preview-project.component.html',
  styleUrl: './preview-project.component.scss'
})
export class PreviewProjectComponent {
	private readonly activeModal = inject(NgbActiveModal)

	img = '';

	close() {
		this.activeModal.close()
	 }
}
