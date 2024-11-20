import { Component, input } from '@angular/core';

@Component({
  selector: 'app-editor-header',
  standalone: true,
  imports: [],
  templateUrl: './editor-header.component.html',
  styleUrl: './editor-header.component.scss'
})
export class EditorHeaderComponent {
	languageIcon = input.required<string>();
	pageName = input.required<string>();
}
