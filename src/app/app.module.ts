import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HomePageComponent } from './components/body/home-page/home-page.component';
import { QuestionsComponent } from './components/body/questions/questions.component';
import {AppRoutingModule} from "./app-routing.module";
import { TagsComponent } from './components/body/tags/tags.component';
import { UsersComponent } from './components/body/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomePageComponent,
    QuestionsComponent,
    TagsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
