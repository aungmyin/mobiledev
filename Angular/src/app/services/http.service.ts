
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  memberID: any;

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrlfeed + serviceName;
    
    return this.http.post(url, JSON.stringify(data), options);
  }

  get(serviceName: string, data: any) {
    
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*"     
    });
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName + "?email=" + data.username + "&password=" + data.password + "&company=" + data.company;

    return this.http.get(url, options);
  }

  getForgotPassword(serviceName: string, data: any) {
    
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*"     
    });
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName + "?email=" + data.username + "&company=" + data.company;

    return this.http.get(url, options);
  }

  getWorkReportDetail(serviceName: string, data: any) {
    //console.log(data.year + data.month + data.member_id + "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'Content-Type':  'application/json',
      'access-token': data.token 
    });
    
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?year=" + data.year + "&month=" + data.month + "&member_id=" + data.member_id;

    return this.http.get(url, options);
  }

  uploadPDFWorkReportDetail(serviceName: string, formData: any, data: any) {
    console.log(formData + "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'access-token': data.token 
    });
    
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, formData, options);
  }

  removePDFCustomerWorkreport(serviceName: string, workreport: any, data: any) {
    console.log(workreport + "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'access-token': data.token 
    });
    
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?workreport_client_id=" + workreport + "&member_id=" + data.member_id;

    return this.http.get(url, options);
  }

  removeClientInfo(serviceName: string, data: any) {
    console.log(data, "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'access-token': data.token 
    });
    
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?member_id=" + data.member_id + "&workreport_client_id=" + data.workreport_client_id;

    return this.http.get(url, options);
  }

  showClientListByUser(serviceName: string, data: any) {
    console.log(data, "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'access-token': data.token 
    });
    
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?member_id=" + data.member_id + "&year=" + data.year + "&month=" + data.month;

    return this.http.get(url, options);
  }

  getUserGuide(serviceName: string, data: any) {
   // console.log(data, " Help")
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*"
    });
    
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?lang=" + data.language + "&filename=" + data.filename;

    return this.http.get(url, options);
  }

  addClientInfo(serviceName: string, clientInfo: any, data: any) {
    console.log(data, "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'access-token': data.token 
    });
    
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?member_id=" + data.member_id + "&client_id=" + clientInfo.client_id + "&project_id=" + clientInfo.project_id + "&individual_contract_id=" + clientInfo.individual_contract_id + "&year=" + data.year + "&month=" + data.month;

    return this.http.get(url, options);
  }
  //download workreport excel
  workReportDownloadExcel(serviceName: string, data: any) {
    console.log(data, "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'Content-Type': 'application/vnd.ms-excel',
      //'access-token': data.token 
    });
    
    const options = { headers: headers, withCredintials: false };
    const url = "https://wrkessence.phoenix.xyz" + serviceName + "?member_id=" + data.member_id + "&lang=" + data.language + "&idname=" + data.idname + "&year=" + data.year + "&month=" + data.month + "&auth_token=" + data.token;

    return this.http.get(url, options);
  }

  getWorkReportDownloadExcel(serviceName: string, data: any) {
    //console.log(data.year + data.month + data.member_id + "http data");
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'Content-Type':  'application/json',
      'access-token': data.token 
    });
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?year=" + data.year + "&month=" + data.month + "&member_id=" + data.member_id;

    return this.http.get(url, options);
  }

  updateWorkReportDetail(serviceName: string, data: any, postData:any) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'Content-Type':  'application/json',
      'access-token': postData.token 
    });
    //console.log(postData);
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?account=" + postData.account + "&workreport_id=" + postData.workreport_id;

    return this.http.post(url, data, options);
  }

  applyWorkReportDetail(serviceName: string, data: any, postData:any) {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*",
      'Content-Type':  'application/json',
      'access-token': postData.token 
    });
    //console.log(postData);
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?account=" + postData.account + "&workreport_id=" + postData.workreport_id;

    return this.http.post(url, data, options);
  }
  
  getUserData(serviceName: string, postData: any) {
    
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*" ,
      'Content-Type':  'application/json',
      'access-token': postData.token   
    });
    console.log(postData, "http profile");
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?member_id=" + postData.email;

    return this.http.get(url, options);
  }

  sendEmailtoAdmin(serviceName: string, postData: any) {
    
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*" ,
      'Content-Type':  'application/json',
      'access-token': postData.token   
    });
    console.log(postData, "http profile");
    const options = { headers: headers, withCredintials: true };
    const url = environment.apiUrl + serviceName + "?member_id=" + postData.member_id + "&month=" + postData.month + "&lang=" + postData.language;

    return this.http.get(url, options);
  }

  getLanguageData(serviceName: string, data: any) {

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': "*"
    });
    console.log(data);
    const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName + "?lang=" + data.language + "&filename=" + data.pages;

    return this.http.get(url, options);
  }

  getupdatepsw(serviceName: string, data: any) {
    console.log(data.member_id, "before send http")
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*",
        'Content-Type':  'application/json',
        'access-token': data.token
      }),
      withCredintials: true
    };
   // const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName + "?company=" + data.company + "&email=" + data.email + "&account=" + data.account + "&oldpass=" + data.old_password + "&newpass=" + data.new_password + "&member_id=" + data.member_id; 
    return this.http.get(url, options);
  }

  forgotpassword(serviceName: string, data: any) {
    
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*"
      }),
      withCredintials: true
    };
   // const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName + "?email=" + data.username + "&company=" + data.company;

    return this.http.get(url, options);
  }

  recoverpass(serviceName: string, data: any) {
    
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*",
        'Content-Type':  'application/json',
        'access-token': data.token
      }),
      withCredintials: true
    };
   // const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + data.rediRectUrl + "&reset=" + data.reset;
    console.log(url, "recoverpass")

    return this.http.get(url, options);
  }

  changepass(serviceName: string, data: any) {
    
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*",
        'Content-Type':  'application/json',
        'access-token': data.token
      }),
      withCredintials: true
    };
   // const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName + "?code=" + data.token + "&newpass=" + data.newPsw + "&confirm_pass=" + data.confirmPsw;
    console.log(url, "changepass")

    return this.http.get(url, options);
  }

  checkTokenSession(serviceName: string, data: any) {
    console.log(data.token, "check token session http")
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': "*",
        'Content-Type':  'application/json',
        'access-token': data.token
      }),
      withCredintials: false
    };
   // const options = { headers: headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;
    console.log(url, "check token session  htp res")

    return this.http.get(url, options);
  }


}
