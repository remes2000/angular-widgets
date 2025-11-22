import { createApplication } from '@angular/platform-browser';
import { Component, createComponent, signal } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';

@Component({
  selector: 'pie-chart',
  template: '<h1>Hello World {{ title() }}</h1>'
})
export class App {
  protected readonly title = signal('pie-angular');
}

export async function buildWidget(host: HTMLElement = document.body) {
  const app = await createApplication({ providers: [provideZonelessChangeDetection()] });
  const comp = createComponent(App, { environmentInjector: app.injector });
  host.appendChild(comp.location.nativeElement);
  app.attachView(comp.hostView);
}
