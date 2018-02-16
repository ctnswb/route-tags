import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouteTagComponent } from './routeTag/routeTag.component';
import { RouteTagDeckComponent } from './routeTagDeck/routeTagDeck.component';
import { RouteTagListComponent } from './routeTagList/routeTagList.component';
import { CreateTagComponent } from './createTag/createTag.component';




@NgModule({
  declarations: [
    AppComponent,
    RouteTagComponent,
    RouteTagDeckComponent,
    RouteTagListComponent,
    CreateTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
