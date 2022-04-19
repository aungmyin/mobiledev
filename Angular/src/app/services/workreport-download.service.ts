import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WorkreportDownloadService {

  workReportDownload$ = new BehaviorSubject<any>(['']);

  constructor(private httpService: HttpService) { }

  workReportDownload(data: any) {
    this.workReportDownload$.next(data);
  }

  workReportDownloadExcel(data: any): Observable<any> {
    return this.httpService.getWorkReportDownloadExcel("basic_user/workreport_download_data", data);
  }
}
