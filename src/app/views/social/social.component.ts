import { Component } from '@angular/core';
import { EditorHeaderComponent } from '../../shared/components/editor-header/editor-header.component';
import { LineComponent } from '../../shared/components/line/line.component';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [EditorHeaderComponent, LineComponent],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {
  whatsapp = this._loadWhatsAppLink();

  private _loadWhatsAppLink() {
    if (this._isMobileDevice()) {
      return 'whatsapp://send?phone=+5528999814672&text="Olá, tudo bem?"';
    } else {
      return 'https://web.whatsapp.com/send?phone=+5528999814672&text="Olá, tudo bem?"';
    }
  }

  private _isMobileDevice() {
    const userAgent = window.navigator.userAgent;

    return (
      userAgent.includes('iPhone') ||
      userAgent.includes('Android') ||
      userAgent.includes('webOS') ||
      userAgent.includes('BlackBerry') ||
      userAgent.includes('iPod')
    );
  }
}
