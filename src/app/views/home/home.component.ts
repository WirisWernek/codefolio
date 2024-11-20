import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { EditorHeaderComponent } from "../../shared/components/editor-header/editor-header.component";
import { LineComponent } from '../../shared/components/line/line.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbNavModule, LineComponent, EditorHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  navs = [1, 2, 3, 4, 5];
  counter = this.navs.length + 1;
  active = 0;

  close(event: MouseEvent, toRemove: number) {
    this.navs = this.navs.filter((id) => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.navs.push(this.counter++);
    event.preventDefault();
  }
}
