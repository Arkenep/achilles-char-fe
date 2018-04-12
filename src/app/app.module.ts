import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModules} from './shared/material.module';

import {LoginService} from './services/login.service';
import {CharacterListComponent} from './modules/character/character-list/character-list.component';
import {CharacterComponent} from './modules/character/character/character.component';
import {LoginComponent} from './modules/login/login.component';
import {MatNativeDateModule} from '@angular/material';

const appRoutes: Routes = [
  {path: 'character-list', component: CharacterListComponent},
  {path: 'character', component: CharacterComponent},
  {
    path: '',
    redirectTo: '/character-list',
    pathMatch: 'full'
  },
  {path: '**', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterComponent,
    LoginComponent,

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    // Angular material modules
    MaterialModules,
    MatNativeDateModule,

    ReactiveFormsModule,

  ],
  providers: [
    LoginService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
