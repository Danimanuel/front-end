import { Component, ViewChild, ElementRef, Output, input, Input, EventEmitter } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-chat',
  imports: [NgIf, NgFor, FormsModule, MarkdownModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  text = '';
  response = '';
  conversationStarted = false;
  messages: { from: 'user' | 'bot', text: string }[] = [];
  loading = false;

  // Recebe o estado inicial do pai
  @Input() mostrarChat: boolean = false;

  // Fechar chat
  @Output() chatFechado = new EventEmitter<void>();

  fecharChat(){
    this.mostrarChat = false;
    this.chatFechado.emit();
  }


  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  constructor(private chatService: ChatService) { }


  sendMessage() {
    if (!this.text.trim()) return;

    // Inicia conversa se for a primeira mensagem
    if (!this.conversationStarted) this.conversationStarted = true;

    // Adiciona mensagem do usuário
    this.messages.push({ from: 'user', text: this.text });
    this.loading = true;
    this.chatService.sendMessage(this.text).subscribe({
      next: (res) => {
        this.messages.push({ from: 'bot', text: res.response });
        this.scrollToBottom();
        this.loading = false;
        this.scrollToBottom();
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.scrollToBottom();
      }
    });

    this.text = '';
    this.scrollToBottom();
  }



  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop =
          this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
}
