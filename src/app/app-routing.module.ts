
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {TagsComponent} from "./components/tags/tags.component";
import {UsersComponent} from "./components/users/users.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {CreateQuestionComponent} from "./components/questions/create-question/create-question.component";

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: 'questions/create', component: CreateQuestionComponent},
    {path: 'tags', component: TagsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

})
export class AppRoutingModule{}