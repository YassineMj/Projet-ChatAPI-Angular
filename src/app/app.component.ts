import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://api.openai.com/v1/chat/completions';

  userInput: string = '';
  chatHistory: string[] = [];

  result: any;

  messages: { role: string; content: string; }[] = [];

  httpHeaders = new HttpHeaders().set("Authorization", "Bearer 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");

  sendMessage() {
    // Ajouter le message de l'utilisateur aux messages
    this.messages.push({ role: "user", content: this.userInput });

    // Construire le payload avec les messages actuels
    const payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    };

    this.http.post(this.apiUrl, payload, { headers: this.httpHeaders }).subscribe({
      next: (resp) => {
        this.result = resp;
        // Ajouter la réponse de l'API à l'historique du chat
        this.messages.push({ role: "system", content: this.result.choices[0].message.content });
        // Réinitialiser l'entrée utilisateur
        this.userInput = '';
      },
      error: (err) => {
        console.error('Erreur lors de l\'envoi du message :', err);
      }
    });
  }
}
