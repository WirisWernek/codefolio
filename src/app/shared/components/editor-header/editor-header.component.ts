import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editor-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './editor-header.component.html',
  styleUrl: './editor-header.component.scss'
})
export class EditorHeaderComponent {

	router = inject(Router);

	languageIcon = input.required<string>();
	pageName = input.required<string>();

	closeClick() {
		this.router.navigateByUrl('home');
	}
}
