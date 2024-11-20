import { Component } from '@angular/core';
import { EditorHeaderComponent } from "../../shared/components/editor-header/editor-header.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [EditorHeaderComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
