import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent {

  email!:string;
  password!:string;
  passwordConf!:string;

  errorPass:boolean=false;

  constructor(public auth: AngularFireAuth , private router: Router) {}

  // Fonction d'inscription
  signUp() {
    if(this.password==this.passwordConf){
      this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Inscription réussie
        console.log('Inscription réussie!', userCredential.user);
        this.errorPass=false;
        alert('Inscription réussie !'); // Afficher une alerte
        this.router.navigate(['/chat'])
      })
      .catch((error) => {
        // Gestion des erreurs
        console.error('Erreur lors de l\'inscription:', error);
      });
    }else{
      console.error('Erreur de password');
      this.errorPass=true;
    }
  }
}
