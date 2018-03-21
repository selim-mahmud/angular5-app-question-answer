import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {QuestionsComponent} from './components/questions/questions.component';
import {AppRoutingModule} from "./app-routing.module";
import {TagsComponent} from './components/tags/tags.component';
import {UsersComponent} from './components/users/users.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {CreateQuestionComponent} from './components/questions/create-question/create-question.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        QuestionsComponent,
        TagsComponent,
        UsersComponent,
        RegisterComponent,
        LoginComponent,
        CreateQuestionComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
