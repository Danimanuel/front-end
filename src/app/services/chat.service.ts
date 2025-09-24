import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://185.148.113.21:8000/messages/'; //url API Django

  constructor(private http: HttpClient) { }

  // Metodo para enviar mensagem ao chatbot
sendMessage(text: string): Observable<any> {
  const body = { text };
  return this.http.post(this.apiUrl, body, {
    headers: { 'Content-Type': 'application/json' }
  });
}


search(query: string): Observable<any> {
  return this.http.post(`${this.apiUrl}search/`, { query }, {
    headers: { 'Content-Type': 'application/json' }
  });
}

}
