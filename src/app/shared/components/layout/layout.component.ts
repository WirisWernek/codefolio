import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
	private readonly router = inject(Router);

	goTo(url: string) {
		console.log(url);
		
		this.router.navigateByUrl(url);
	}

	private getIcons() {
		return [
			{
				description: 'Início',
				url: '/',
				icon: 'DocumentCopy'
			},
			{
				description: 'Buscar',
				url: '',
				icon: 'Search'
			},
			{
				description: 'Bug',
				url: '',
				icon: 'Bug'
			},
			{
				description: 'Social',
				url: 'links',
				icon: 'Extension'
			},
			{
				description: 'Projetos',
				url: 'projects',
				icon: 'Desktop'
			}
		]
	}
}

interface Icon { 
	description: string,
	url: string,
	icon: string
}