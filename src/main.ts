import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { MarkdownModule } from 'ngx-markdown';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    importProvidersFrom(MarkdownModule.forRoot())
  ]
});
