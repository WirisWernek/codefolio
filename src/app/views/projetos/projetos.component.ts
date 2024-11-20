import { Component } from '@angular/core';
import { EditorHeaderComponent } from "../../shared/components/editor-header/editor-header.component";

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [EditorHeaderComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

}
