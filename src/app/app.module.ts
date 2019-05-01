import { InputComponent } from './input/input.component';
import { RepoListComponent } from './repo-list/repolist.component';
import { RepoDataComponent } from './repo-data/repodata.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoDataComponent,
    RepoListComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
