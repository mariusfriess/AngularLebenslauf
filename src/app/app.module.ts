import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { PersonalDetailsComponent } from "./content/personal-details/personal-details.component";
import { SchulbildungComponent } from './content/schulbildung/schulbildung.component';
import { SchulpraktikaComponent } from './content/schulpraktika/schulpraktika.component';
import { InteressenComponent } from './content/interessen/interessen.component';

@NgModule({
  declarations: [AppComponent, NavComponent, PersonalDetailsComponent, SchulbildungComponent, SchulpraktikaComponent, InteressenComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
