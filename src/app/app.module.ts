import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AppRoutingModule } from './app-routing.module';
import { TagsComponent } from './components/tags/tags.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CreateQuestionComponent } from './components/questions/create-question/create-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { QuestionDataService } from './services/question/question-data.service';
import { HttpHeaderService } from './services/http-header.service';
import { QuestionApiService } from './services/question/question-api.service';
import { ApiUrlService } from './services/api-url.service';
import { QuestionTransformerService } from './services/transformers/question-transformer.service';
import { AnswerTransformerService } from './services/transformers/answer-transformer.service';
import { TagTransformerService } from './services/transformers/tag-transformer.service';
import { UserTransformerService } from './services/transformers/user-transformer.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AppUrlService } from './services/app-url.service';
import { AppConfigModule } from "./app-config.module";
import { PaginationMetaTransformationService } from './services/transformers/pagination-meta-transformation.service';
import { FeaturedComponent } from './components/questions/featured/featured.component';
import { PopularComponent } from './components/questions/popular/popular.component';
import { UnansweredComponent } from './components/questions/unanswered/unanswered.component';
import { QuestionComponent } from './components/questions/question/question.component';

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
        PaginationComponent,
        FeaturedComponent,
        PopularComponent,
        UnansweredComponent,
        QuestionComponent,
    ],
    imports: [
        AppConfigModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule,
    ],
    providers: [
        QuestionDataService,
        HttpHeaderService,
        QuestionApiService,
        ApiUrlService,
        QuestionTransformerService,
        AnswerTransformerService,
        TagTransformerService,
        UserTransformerService,
        AppUrlService,
        PaginationMetaTransformationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
