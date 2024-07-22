import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { fromEvent } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './components/shared/enums/language.enum';
import { SESIION_LANG_KEY } from './components/shared/constantes/storage.const';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [],
})
export class AppComponent {
  title = 'ynex';
  public isSpinner = true;

  private readonly translateService = inject(TranslateService);
  ngOnInit() {
    // this.isSpinner = false
    // fromEvent(window, 'load').subscribe(() => {document.querySelector('#loader')?.classList.remove('');});
      this.initLanguage();
  }

  private initLanguage(): void {
    let lang = '';
    const sessionLang = sessionStorage.getItem(SESIION_LANG_KEY);
    if (sessionLang) {
      lang = sessionLang;
    } else {
      lang =
        this.translateService.getBrowserLang() ??
        this.translateService.getDefaultLang();
    }
    this.translateService.use(lang);
  }
}
