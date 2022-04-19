import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqData$ = new BehaviorSubject<any>(['']);

  constructor( private httpService: HttpService ) { }

  changefaqData(data: any) {
    this.faqData$.next(data);
  }

  faqData(postData: any): Observable<any> {
    return this.httpService.getUserGuide('public_lang/get_hflr', postData);
  }
}
