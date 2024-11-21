import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { EditorHeaderComponent } from '../../shared/components/editor-header/editor-header.component';
import { LineComponent } from "../../shared/components/line/line.component";
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [EditorHeaderComponent, ProjectCardComponent, LineComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  projects: Project[] = this._loadProjects();

  private _loadProjects(): Project[] {
    return [
      {
        title: 'Projeto 1',
        description: 'Descrição do projeto 1',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Projeto 2',
        description: 'Descrição do projeto 2',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Projeto 3',
        description: 'Descrição do projeto 3',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Projeto 4',
        description: 'Descrição do projeto 4',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Projeto 5',
        description: 'Descrição do projeto 5',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Projeto 6',
        description: 'Descrição do projeto 6',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Projeto 7',
        description: 'Descrição do projeto 7',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
      {
        title: 'Projeto 8',
        description: 'Descrição do projeto 8',
        thumb: 'https://via.placeholder.com/150',
        deploy: 'https://github.com',
        github: 'https://github.com',
        technologies: ['Angular', 'TypeScript'],
      },
    ];
  }
}
