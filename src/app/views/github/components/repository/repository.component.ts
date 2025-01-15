import { Component, input } from '@angular/core';
import { LimitPipe } from '../../../../shared/pipes/limit/limit.pipe';
import { Repository } from './../../../../models/repository.model';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [LimitPipe],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss',
})
export class RepositoryComponent {
  repository = input.required<Repository>();
}
