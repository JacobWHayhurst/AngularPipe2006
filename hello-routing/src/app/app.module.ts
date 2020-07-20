import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HeroService} from './services/hero.service';
import {PokeService} from './services/poke.service';
import { ROCPService } from './services/rocp.service';




@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    ProfileComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    /*
      the router module allows us to have SPA(single page application). We can
      define paths to quickly swap components in and out of a specific view.
      To do this you need to use the .forRoot([]) in the app.module.ts. for this reason
      you should keep RouterModule as the last module in your imports.
    */
    RouterModule.forRoot([
      {path: 'superheroes', component: HeroListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'profile/:heroname', component: ProfileComponent},
      // {path: '', redirectTo: 'superheroes', pathMatch: 'full'}
      {path: '**', redirectTo: 'superheroes'}
    ])
  ],
  providers: [HeroService, PokeService, ROCPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
