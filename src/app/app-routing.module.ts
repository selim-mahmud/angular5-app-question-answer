
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./components/body/home-page/home-page.component";
import {QuestionsComponent} from "./components/body/questions/questions.component";
import {TagsComponent} from "./components/body/tags/tags.component";
import {UsersComponent} from "./components/body/users/users.component";
import {RegisterComponent} from "./components/body/register/register.component";
import {LoginComponent} from "./components/body/login/login.component";

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'questions', component: QuestionsComponent},
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