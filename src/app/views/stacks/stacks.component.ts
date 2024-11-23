import { Component } from '@angular/core';
import { EditorHeaderComponent } from '../../shared/components/editor-header/editor-header.component';
import { LineComponent } from '../../shared/components/line/line.component';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [LineComponent, EditorHeaderComponent],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.scss',
})
export class StacksComponent {
  frameworks = [
    'Angular',
    'Spring Boot',
    'Node.js',
    'React Native',
    'Bootstrap',
    'Tailwind',
  ];

  technologies = [
    'Java',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'SASS',
    'SQL',
    'PHP',
  ];

  databases = ['MySql', 'PostgreSql', 'Firebase'];

  clouds = ['AWS', 'Digital Ocean'];

  messageBrokers = ['RabbitMQ', 'SQS'];

  tools = [
    'Docker',
    'Vagrant',
    'Figma',
    'VS Code',
    'IntelliJ',
    'Eclipse',
    'Postman',
    'Git',
    'Azure Devops',
    'GitHub',
    'GitLab',
    'LocalStack',
  ];
}
