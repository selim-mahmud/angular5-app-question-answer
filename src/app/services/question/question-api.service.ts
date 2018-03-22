import { Injectable } from '@angular/core';
import {HttpHeaderService} from '../http-header.service';

@Injectable()
export class QuestionApiService {

  constructor(private httpHeaders: HttpHeaderService) { }

}
