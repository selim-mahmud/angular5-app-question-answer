import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthService} from "./services/auth.service";
import {Subscription} from "rxjs/Subscription";
import {TagDataService} from "./services/tag/tag-data.service";
import {Tag} from "./models/tag";
import {Question} from "./models/question";
import {QuestionDataService} from "./services/question/question-data.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    static readonly title: string = 'Q&A - An Angular App';
    isAuth: boolean = false;
    authSubscription: Subscription;

    tags: Tag[];
    tagLoadingSpinner: boolean = true;
    isTags: boolean = false;

    questions: Question[];
    questionLoadingSpinner: boolean = true;
    isQuestions: boolean = false;

    public constructor(
        private titleService: Title,
        private authService: AuthService,
        private tagDataService: TagDataService,
        private questionDataService: QuestionDataService,
   ) {

    }

    ngOnInit() {
        this.titleService.setTitle(AppComponent.title);

        this.isAuth = this.authService.isAuth();
        this.authSubscription = this.authService.authChange.subscribe(authStatus => {
            this.isAuth = authStatus;
        });

        this.getTags();
        this.getQuestions();
    }

    onLogout(){
        this.authService.logout();
    }

    getTags(): void {
        this.tagDataService.getAllTags().subscribe(response => {
            this.tags = response.tags;
            this.tagLoadingSpinner = false;
            this.isTags = this.tags.length === 0;
        });
    }

    getQuestions(): void {
        this.questionDataService.getAllQuestions().subscribe(response => {
            this.questions = response.questions;
            this.questionLoadingSpinner = false;
            this.isQuestions = this.questions.length === 0;
        });
    }

    ngOnDestroy(){
        this.authSubscription.unsubscribe();
    }

}
