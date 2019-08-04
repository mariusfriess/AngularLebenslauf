import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonalDetailsComponent } from "./content/personal-details/personal-details.component";
import { SchulbildungComponent } from "./content/schulbildung/schulbildung.component";
import { SchulpraktikaComponent } from "./content/schulpraktika/schulpraktika.component";
import { InteressenComponent } from "./content/interessen/interessen.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: PersonalDetailsComponent
  },
  {
    path: "schulbildung",
    component: SchulbildungComponent
  },
  {
    path: "schulpraktika",
    component: SchulpraktikaComponent
  },
  {
    path: "interessen",
    component: InteressenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
