import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './shared/material.module';

import {LoginService} from './services/login.service';
import {CharacterListComponent} from './modules/character/character-list/character-list.component';
import {CharacterComponent} from './modules/character/character/character.component';
import {MatNativeDateModule} from '@angular/material';
import {ToolbarComponent} from './modules/toolbar/toolbar.component';
import {LoginDialogComponent} from './modules/login-dialog/login-dialog.component';
import {AuthHttpInterceptor} from './shared/auth.interceptor';

const appRoutes: Routes = [
  {path: 'character-list', component: CharacterListComponent},
  {path: 'character', component: CharacterComponent},
  {
    path: '',
    redirectTo: '/character-list',
    pathMatch: 'full'
  },
  {path: '**', component: CharacterListComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterComponent,
    LoginDialogComponent,
    ToolbarComponent,

  ],
  entryComponents: [
    LoginDialogComponent
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
    MaterialModule,
    MatNativeDateModule,

    ReactiveFormsModule,

  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
