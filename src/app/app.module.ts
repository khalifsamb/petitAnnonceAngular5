import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { SingleAnnonceComponent } from './liste-annonce/single-annonce/single-annonce.component';
import { AnnonceFormComponent } from './liste-annonce/annonce-form/annonce-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AnnonceService } from './services/annonce.service';
import { AuthGuardService } from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes=[
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'annonce', component: ListeAnnonceComponent},
  {path: 'annonce/new',canActivate: [AuthGuardService], component: AnnonceFormComponent},
  {path: 'annonce/:id', component: SingleAnnonceComponent},
  {path: '',redirectTo: 'annonce', pathMatch: 'full'},
  {path: '**', redirectTo: 'annonce'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ListeAnnonceComponent,
    SingleAnnonceComponent,
    AnnonceFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AnnonceService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
