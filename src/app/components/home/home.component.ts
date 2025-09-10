import { Component } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  chatAberto = false;

  abrirChat() {
    this.chatAberto = true;
  }

  onChatFechado() {
    this.chatAberto = false;
    console.log("Fechado");
  }
}
