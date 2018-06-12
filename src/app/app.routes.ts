import { Routes } from "@angular/router";
import { PeopleComponent } from "./people/people.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: "people",
    component: PeopleComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "**",
    redirectTo: "people",
    pathMatch: 'full'
  }
];
