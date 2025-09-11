import { Component } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  chatAberto = false;

  abrirChat() {
    this.chatAberto = true;
  }

  fecharChat() {
    this.chatAberto = false;
  }

  
}
