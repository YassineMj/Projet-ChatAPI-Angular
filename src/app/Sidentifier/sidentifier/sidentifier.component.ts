import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-sidentifier',
  templateUrl: './sidentifier.component.html',
  styleUrls: ['./sidentifier.component.css']
})
export class SidentifierComponent implements OnInit {

  email!:string;
  password!:string;

  errorCompte:boolean=false;

  constructor(public auth: AngularFireAuth , private router: Router , private _serviceAuth:AuthService) {}
  
  ngOnInit(): void {
    this._serviceAuth.user=null;
  }

  signIn() {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Identification réussie
        console.log('Identification réussie!', userCredential.user);
        this._serviceAuth.user=userCredential.user;
        this.errorCompte=false;
        this.router.navigate(['/chat'])

      })
      .catch((error) => {
        // Gestion des erreurs
        console.error('Erreur lors de l\'identification:', error);
        this.errorCompte=true;

      });
  }

}
