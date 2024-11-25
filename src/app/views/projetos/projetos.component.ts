import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { EditorHeaderComponent } from '../../shared/components/editor-header/editor-header.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [EditorHeaderComponent, ProjectCardComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  projects: Project[] = this._loadProjects();

  private _loadProjects(): Project[] {
    return [
      {
        title: 'Cartão de Visitas',
        description: 'O futuro dos ultrapassados Cartões de Visita',
        thumb: 'projects/cartao_digital.png',
        deploy: 'https://dbc-wiriswernek.vercel.app',
        github: 'https://github.com/WirisWernek/digital-business-card-frontend',
        technologies: ['Angular', 'Typescript', 'Bootstrap', 'Firebase'],
      },
      {
        title: 'Github Repos',
        description: 'Busque o que realmente te importa no Github',
        thumb: 'projects/github_repos.png',
        deploy: 'https://github-repos-wiriswernek.vercel.app',
        github: 'https://github.com/WirisWernek/github-repos',
        technologies: ['Angular', 'Typescript', 'TailwindCSS', 'Github'],
      },
      {
        title: 'Previsão do Tempo',
        description: 'Métricas e opiniões em um único lugar',
        thumb: 'projects/previsao_do_tempo.png',
        deploy: 'https://previsao-tempo-wiriswernek.vercel.app',
        github: 'https://github.com/WirisWernek/previsao_tempo',
        technologies: ['Angular', 'Typescript', 'TailwindCSS'],
      },
      {
        title: 'Avaliações',
        description: 'O futuro dos ultrapassados Cartões de Visita',
        thumb: 'projects/avaliacoes.png',
        deploy: 'https://avaliacoes-wiriswernek.vercel.app',
        github: 'https://github.com/WirisWernek/avaliacoes-app',
        technologies: ['Angular', 'Typescript', 'Bootstrap', 'Firebase'],
      },
      {
        title: 'Hotel Paraíso',
        description: 'O site de um hotel paradisíaco',
        thumb: 'projects/hotel_paraiso.png',
        deploy: 'https://wiriswernek.github.io/ProjetoHotelParaiso',
        github: 'https://github.com/WirisWernek/ProjetoHotelParaiso',
        technologies: ['HTML', 'CSS'],
      },
      {
        title: 'Pede Aí',
        description: 'Bora pedir um açaí? pede aí',
        thumb: 'projects/pede_ai.png',
        deploy: 'https://pedeai-wiriswernek.vercel.app',
        github: 'https://github.com/WirisWernek/pede-ai',
        technologies: ['Angular', 'Typescript', 'Bootstrap'],
      },
      {
        title: 'Página de Contato',
        description: 'Uma página seus cliente te contactarem',
        thumb: 'projects/contact_page.png',
        deploy: 'https://contact-page-wiriswernek.vercel.app/',
        github: 'https://github.com/WirisWernek/contact-page',
        technologies: ['Angular', 'Typescript', 'Bootstrap'],
      },
      {
        title: 'QR Code Generator',
        description: 'Gere e compartilhe QR Codes rapidamente',
        thumb: 'projects/qrcode_generator.png',
        deploy: 'https://qr-code-generator-wiriswernek.vercel.app/',
        github: 'https://github.com/WirisWernek/qr-code-generator',
        technologies: ['Angular', 'Typescript', 'Bootstrap'],
      },
	  {
		title: 'Tela de Login',
		description: 'Uma tela de login moderna e responsiva.',
		thumb: 'projects/tela-login-codelandia.png',
		deploy: 'todo-wiriswernek.vercel.app',
		github: 'https://github.com/WirisWernek/blog',
		technologies: ['Angular', 'Typescript', 'Bootstrap'],
	  },
	  {
		title: 'Portfolio',
		description: 'Antigo portfolio.',
		thumb: 'projects/portfolio.png',
		deploy: 'https://portfolio-wiriswernek.vercel.app',
		github: 'https://github.com/WirisWernek/personal-page',
		technologies: ['Angular', 'Typescript', 'Bootstrap'],
	  },
      {
        title: 'Logmine',
        description: 'Seu login um pouco mais quadrado',
        thumb: 'projects/logmine.png',
        deploy: '',
        github: 'https://github.com/WirisWernek/logmine',
        technologies: ['Angular', 'Typescript', 'SCSS'],
      },
      {
        title: 'Blog',
        description: 'Quem sabe o primeiro passo de um futuro blog?',
        thumb: 'projects/blog-codelandia.png',
        deploy: '',
        github: 'https://github.com/WirisWernek/blog',
        technologies: ['Angular', 'Typescript', 'Bootstrap'],
      },
      {
        title: 'ToDo',
        description: 'Gerenciador local de tarefas.',
        thumb: 'projects/todo.png',
        deploy: '',
        github: 'https://github.com/WirisWernek/ToDo',
        technologies: ['Angular', 'Typescript', 'Bootstrap'],
      },
    ];
  }
}
