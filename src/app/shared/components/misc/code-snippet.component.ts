import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  template: `
    <div class="code-snippet">
      <ion-text><span class="code-snippet__title">{{ title }}</span></ion-text>
      <div class="code-snippet__container">
        <div class="code-snippet__wrapper">
          <pre class="code-snippet__body">{{ code }}</pre>
        </div>
      </div>
    </div>
  `,
})
export class CodeSnippetComponent {
  @Input() code: string | undefined;
  @Input() title: string | null | undefined;
}
