import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitchService { 

  langSwitchData$ = new BehaviorSubject<any>(['']);

  constructor() { }

  changeLangSwitchData(data: any) {
    this.langSwitchData$.next(data);
  }

  updateLangSwitchData(newdata: any) {
    this.changeLangSwitchData(newdata);
  }
}
