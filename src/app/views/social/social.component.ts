import { Component } from '@angular/core';
import { EditorHeaderComponent } from "../../shared/components/editor-header/editor-header.component";
import { LineComponent } from "../../shared/components/line/line.component";

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [EditorHeaderComponent, LineComponent],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {

}
