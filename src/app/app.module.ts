import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.Module';
import { ContadoresModule } from './contadores/Contadores.Module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModules,
    ContadoresModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
