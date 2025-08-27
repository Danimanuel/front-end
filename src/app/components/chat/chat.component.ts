import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-chat',
  imports: [NgClass, NgIf],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  mostraChat = true;
mostrarChat: any;

  appear() {
    this.mostraChat = !this.mostraChat
  }

}


