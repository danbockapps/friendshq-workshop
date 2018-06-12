import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { ShowPersonComponent } from './people/show-person/show-person.component';
import { FriendsService } from './shared/friends.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FullNamePipe } from './people/shared/full-name.pipe';
import { PersonFormComponent } from './people/person-form/person-form.component';
import { EnumToArrayPipe } from './shared/enum-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonListComponent,
    ShowPersonComponent,
    DashboardComponent,
    FullNamePipe,
    PersonFormComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    FriendsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

