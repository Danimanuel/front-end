import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },     // página inicial
  { path: 'home', component: HomeComponent }, // opcional, caso queiras acessar /home
  { path: 'chat', component: ChatComponent },
  {path: 'header', component:HeaderComponent}  // rota do chat
];
