import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languageData$ = new BehaviorSubject<any>(['']);

  constructor(private httpService: HttpService ) { }

  changeLanguageData(data: any) {
    this.languageData$.next(data);
  }

  languageData(data: any): Observable<any> {
    return this.httpService.getLanguageData("public_lang/get_hflr", data);
  }

  updateLangData(newdata: any) {
    this.changeLanguageData(newdata);
  }
}
