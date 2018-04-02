
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {QuestionsComponent as TagQuestionsComponent} from "./components/tags/questions/questions.component";
import {TagsComponent} from "./components/tags/tags.component";
import {UsersComponent} from "./components/users/users.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {CreateQuestionComponent} from "./components/questions/create-question/create-question.component";
import {FeaturedComponent} from "./components/questions/featured/featured.component";
import {PopularComponent} from "./components/questions/popular/popular.component";
import {UnansweredComponent} from "./components/questions/unanswered/unanswered.component";
import {QuestionComponent} from "./components/questions/question/question.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: 'questions/create', component: CreateQuestionComponent},
    {path: 'questions/featured', component: FeaturedComponent},
    {path: 'questions/popular', component: PopularComponent},
    {path: 'questions/unanswered', component: UnansweredComponent},
    {path: 'questions/:id', component: QuestionComponent},
    {path: 'tags', component: TagsComponent},
    {path: 'tags/:id/questions', component: TagQuestionsComponent},
    {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]

})
export class AppRoutingModule{}