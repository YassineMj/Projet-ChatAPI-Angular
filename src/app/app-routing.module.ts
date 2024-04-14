import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidentifierComponent } from './Sidentifier/sidentifier/sidentifier.component';
import { SinscrireComponent } from './Sinscrire/sinscrire/sinscrire.component';
import { ChatComponent } from './Chat/chat/chat.component';

const routes: Routes = [

  {path:'',component:SidentifierComponent}, 
  { path: 'sinscrire', component: SinscrireComponent }, 
  {path:'chat',component:ChatComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
