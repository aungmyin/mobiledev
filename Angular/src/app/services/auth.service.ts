import { HttpService } from './http.service';
import { Injectable, Compiler } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService, 
    private storageService: StorageService, 
    private router: Router,
    private tmplCompiler: Compiler
  ) {}

  userData$ = new BehaviorSubject<any>(['']);

  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log(res);
      this.userData$.next(res);
    });
  }

  getUserDatail(userId: String): Observable<any> {
    return this.httpService.getUserData('/employee_detail/employee_info', userId);
  }

  getWorkReportDetail(postData: any): Observable<any> {
    return this.httpService.getWorkReportDetail('basic_user/basic_user_workreport_detail', postData);
  }

  updateWorkReportDetail(workreportData: any, postData: any): Observable<any> {
    return this.httpService.updateWorkReportDetail('/workreport/workreport_update_mobile', workreportData, postData);
  }

  uploadPDFWorkReportDetail(formData: any, postData:any): Observable<any> {
    return this.httpService.uploadPDFWorkReportDetail('basic_user/workreport_upload', formData, postData);
  }

  removePDFCustomerWorkreport(workreportData: any, postData: any): Observable<any> {
    return this.httpService.removePDFCustomerWorkreport('/workreport/workreport_pdf_delete', workreportData, postData);
  }

  removeClientInfo(postData: any): Observable<any> {
    return this.httpService.removeClientInfo('/workreport/customer_info_delete', postData);
  }

  applyWorkReportDetail(workreportData: any, postData: any): Observable<any> {
    return this.httpService.applyWorkReportDetail('/basic_user/workreport_apply_change_mobile', workreportData, postData);
  }

  applyExpense(workreportData: any, postData: any): Observable<any> {
    return this.httpService.applyWorkReportDetail('/basic_user/workreport_apply_change_mobile', workreportData, postData);
  }

  showClientListByUser(postData: any): Observable<any> {
    return this.httpService.showClientListByUser('/workreport/customer_information', postData);
  }

  checkTokenSession(postData: any): Observable<any> {
    return this.httpService.checkTokenSession('login/check-session', postData);
  }

  getFAQ(postData: any): Observable<any> {
    return this.httpService.getUserGuide('public_lang/get_hflr', postData);
  }

  getUserGuide(postData: any): Observable<any> {
    return this.httpService.getUserGuide('public_lang/get_hflr', postData);
  }

  sendEmailtoAdmin(postData: any): Observable<any> {
    return this.httpService.sendEmailtoAdmin('/basic_user/noti_unassign_email', postData);
  }

  addClientInfo(clientInfo: any, postData: any): Observable<any> {
    return this.httpService.addClientInfo('/workreport/customer_info_add', clientInfo, postData);
  }

  workReportDownloadExcel(postData: any): Observable<any> {
    return this.httpService.workReportDownloadExcel('/general/excel/mobile_download/workreport_download.php', postData);
  }

  login(postDate: any): Observable<any> {
    //return this.httpService.post('login', postDate);
    return this.httpService.get('login/uac_login', postDate);
  }

  signup(postDate: any): Observable<any> {
    return this.httpService.post('signup', postDate);
  }

  updatepassword(postDate: any): Observable<any> {
    return this.httpService.getupdatepsw('changepass/chpass', postDate);
  }

  forgotpassword(postDate: any): Observable<any> {
    return this.httpService.forgotpassword('forgotpass/ask', postDate);
  }

  recoverpass(postDate: any): Observable<any> {
    return this.httpService.recoverpass('recoverpass/reset', postDate);
  }

  changepass(postDate: any): Observable<any> {
    return this.httpService.changepass('forgotpass/ch/chpassword', postDate);
  }

  logout() {
    this.storageService.clear();
    localStorage.clear();
    this.storageService.removeItems(AuthConstants.AUTH).then( res => {
      this.userData$.next('');
      this.router.navigate(['']);
    });

    sessionStorage.clear();
    
    //clear tmpl cache
    this.tmplCompiler.clearCache();

    window.location.href="/";
  }
}