import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  
  constructor(public auth: AngularFireAuth, private http: HttpClient , private router: Router , public _serviceAuth:AuthService) { }
 
  ngOnInit(): void {
    if(this._serviceAuth.user==null){
      this.router.navigate(['/'])
    }
  }

  getEmailInitial(): string {
    const email = this._serviceAuth.user.multiFactor.user.email;
    if (email && email.length > 0) {
      return email.charAt(0).toUpperCase(); // Retourne le premier caractère en majuscule
    } else {
      return ''; // Retourne une chaîne vide si l'e-mail est vide
    }
  }

  apiUrl = 'https://api.openai.com/v1/chat/completions';

  userInput: string = '';
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

   onKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  }

  signOut() {
    this.auth.signOut()
      .then(() => {
        this._serviceAuth.user=null
        console.log('Déconnexion réussie!');
        this.router.navigate(['/'])

      })
      .catch((error) => {
        console.error('Erreur lors de la déconnexion:', error);
      });
  }
}
