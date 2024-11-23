import { Component } from '@angular/core';
import { EditorHeaderComponent } from '../../shared/components/editor-header/editor-header.component';
import { LineComponent } from '../../shared/components/line/line.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [EditorHeaderComponent, LineComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
 
}
