import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NgbTooltipModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
	options: Icon[] = this.getIcons();

	private getIcons() {
		return [
			{
				description: 'Início',
				url: 'home',
				icon: 'DocumentCopy'
			},
			{
				description: 'Buscar',
				url: 'buscar',
				icon: 'Search'
			},
			{
				description: 'Bug',
				url: 'bugs',
				icon: 'Bug'
			},
			{
				description: 'Social',
				url: 'links',
				icon: 'Extension'
			},
			{
				description: 'Stacks',
				url: 'stacks',
				icon: 'Folder'
			},
			{
				description: 'Projetos',
				url: 'projects',
				icon: 'Laptop'
			}
		]
	}
}

interface Icon { 
	description: string,
	url: string,
	icon: string
}