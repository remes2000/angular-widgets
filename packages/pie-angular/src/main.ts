import { createApplication } from '@angular/platform-browser';
import { Component, computed, createComponent, signal } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';

const primaryTheme = ['#FF6384', '#36A2EB', '#FFCE56'];
const secondaryTheme = ['#00FF41', '#008F11', '#003B00'];

@Component({
  selector: 'pie-chart',
  template: `
    <figure [style]="{ textAlign: 'center' }">
      <svg viewBox="0 0 100 100" width="120" height="120">
        <path d="M 50 50 L 50 10 A 40 40 0 0 1 88 62 Z" [attr.fill]="colors()[0]">
          <title>30% Europe</title>
        </path>
        <path d="M 50 50 L 88 62 A 40 40 0 0 1 12 62 Z" [attr.fill]="colors()[1]">
          <title>45% North America</title>
        </path>
        <path d="M 50 50 L 12 62 A 40 40 0 0 1 50 10 Z" [attr.fill]="colors()[2]">
          <title>25% Asia</title>
        </path>
      </svg>
      <div [style]="{ textAlign: 'center', marginTop: '8px' }">
        <figcaption>Angular Pie Chart</figcaption>
        <button (click)="toggleTheme()">theme</button>
      </div>
    </figure>
  `
})
export class App {
  protected readonly theme = signal<'primary' | 'secondary'>('primary');
  protected readonly colors = computed(() => this.theme() === 'primary' ? primaryTheme : secondaryTheme);

  toggleTheme() {
    this.theme.update(t => t === 'primary' ? 'secondary' : 'primary');
  }
}

export async function buildWidget(host: HTMLElement = document.body) {
  const app = await createApplication({ providers: [provideZonelessChangeDetection()] });
  const comp = createComponent(App, { environmentInjector: app.injector });
  host.appendChild(comp.location.nativeElement);
  app.attachView(comp.hostView);
}
