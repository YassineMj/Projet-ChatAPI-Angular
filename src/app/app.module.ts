import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SinscrireComponent } from './Sinscrire/sinscrire/sinscrire.component';
import { SidentifierComponent } from './Sidentifier/sidentifier/sidentifier.component';
import { ChatComponent } from './Chat/chat/chat.component';

import {AngularFireModule } from '@angular/fire/compat';
import{AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SinscrireComponent,
    SidentifierComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
