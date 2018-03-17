import {Injectable} from '@angular/core';
import {Question} from "../models/question";

@Injectable()
export class QuestionService {

    // automatic incrementing of ids
    lastId: number = 0;

    // Placeholder for questions
    questions: Question[] = [];

    constructor() {
    }

    getAllTodos(): Question[] {
        return this.questions;
    }

    getTodoById(id: string): Question {
        return this.questions
            .filter(question => question.id === id)
            .pop();
    }

    addTodo(question: Question): QuestionService {

        this.questions.push(question);
        return this;
    }

    updateQuestionById(id: string, values: Object = {}): Question {
        let question = this.getTodoById(id);
        if (!question) {
            return null;
        }
        Object.assign(question, values);
        return question;
    }

    toggleQuestionFeatured(question: Question) {

        let updatedQuestion = this.updateQuestionById(question.id, {
            featured: !question.featured
        });
        return updatedQuestion;
    }

    deleteQuestionById(id: string): QuestionService {
        this.questions = this.questions
            .filter(question => question.id !== id);
        return this;
    }

}
