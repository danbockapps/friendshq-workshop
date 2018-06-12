import { Routes } from "@angular/router";
import { PeopleComponent } from "./people/people.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PersonFormComponent } from "./people/person-form/person-form.component";
import { PersonListComponent } from "./people/person-list/person-list.component";

export const routes: Routes = [
  {
    path: "people",
    component: PeopleComponent,
    children: [
      {
        path: "",
        component: PersonListComponent
      },
      {
        path: "add",
        component: PersonFormComponent
      }
    ]
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
