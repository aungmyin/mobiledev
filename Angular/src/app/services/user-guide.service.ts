import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuideService {

  userGuideData$ = new BehaviorSubject<any>(['']);

  constructor(private httpService: HttpService) { }

  changeUserGuideData(data: any) {
    this.userGuideData$.next(data);
  }

  userGuideData(postData: any): Observable<any> {
    return this.httpService.getUserData("public_lang/get_hflr", postData);
  }
}
