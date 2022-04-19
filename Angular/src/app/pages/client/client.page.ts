import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from 'src/app/services/clientinfo.service';
import { ToastService } from 'src/app/services/toast.service';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  
  postData = {
    year: '',
    month: '',
    member_id: '',
    token: '',
    workreport_client_id: '',
    language: '',
    idname: '',
    pages: '',
    account: ''
  }

  authUser:any;
  newDate: any;
  newMonth: any;

  contractTypeName: String;
  workingHour: any;
  data: any;
  projectInfo: any;
  clientrpflg: any;
  wkPattern: any;
  wkingHour: any;
  dataLeng: any;
  delFlg: any;
  showClients: any;
  showClStatus: any;

  constructor(
    private auth: AuthService, 
    private toastService: ToastService, 
    private route: ActivatedRoute, 
    private router: Router,
    private clientService: ClientinfoService,
    private langServe: LanguageService,
    private langSwitch: LanguageSwitchService,
    private authServe: AuthService,
    private http: HttpService
    ) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.projectInfo = this.router.getCurrentNavigation().extras.state.special;
          this.clientrpflg = this.router.getCurrentNavigation().extras.state.clientrpflg;
          this.wkPattern = this.router.getCurrentNavigation().extras.state.workingPattern;
          this.wkingHour = this.router.getCurrentNavigation().extras.state.workingHour;
          this.postData.year = this.router.getCurrentNavigation().extras.state.year;
          this.postData.month = this.router.getCurrentNavigation().extras.state.month;

          this.data = this.projectInfo;

          if (this.wkPattern.length > 0) {
            this.delFlg = 0;
            console.log(this.wkPattern, this.delFlg, " client view");
          } else {
            this.delFlg = 1;
            console.log(this.wkPattern, this.delFlg, " client view");
          }

        }

        this.auth.userData$.subscribe((res: any) => {
          this.authUser = res;
          this.postData.member_id = this.authUser.member_id;
          this.postData.token = this.authUser['access-token'];
          this.postData.idname = this.authUser.account;
    
          console.log(res, "login data client")
        });
      });
    }

  ngOnInit() {
   

    if(!this.postData.year || this.postData.year.length == 0) {
      this.newDate = new Date().getFullYear();
      this.newMonth = new Date().getMonth();
      this.postData.year = this.newDate;
      this.postData.month = this.newMonth + 1;
     // console.log(this.newDate + this.newMonth + "current year");
    }

    this.languageDefault();

  }

  languageDefault() {
    
    // console.log("language selecct", this.postData);
     this.langSwitch.langSwitchData$.subscribe( (res: any) => {
 
       this.postData.language = res.language;
       //console.log(this.postData.language, 'assign');
       
       if(!this.postData.language) {
         this.postData.language = 'en';
         
         //console.log(this.postData.language, 'default');
       }
      
       this.postData.pages = 'work_report';
 
       this.langServe.languageData(this.postData).subscribe( (res: any) => {
         console.log(res.data, ' work_report');
         this.dataLeng = res.data;
       });
 
     } );
 
  }

  sendEmailtoAdmin() {
    this.authServe.sendEmailtoAdmin(this.postData).subscribe( (res: any) => {
      console.log(res, "Send email status")
      if(res.status == 1) {
        this.toastService.presentToast("Email sent already.");
      } else {
        this.toastService.presentToast("Something was wrong.");
      }
    } );
  }

  //add client info request member_id, year and month
  showCustmers() {
    console.log("Add Client Info", this.postData, )

    this.authServe.showClientListByUser(this.postData).subscribe( (res: any) => {
      console.log(res, this.data, "show client list")
      this.showClients = res;
      this.showClStatus = 1;
      if(this.data.length == this.showClients.length) {
        this.toastService.presentToast(this.showClients.length + " customer and already showed.");
      } else {
        this.toastService.presentToast("Something was wrong!");
      }

    } );
  }

  addCustomer(i:number) {
    console.log(this.postData, this.showClients[i], "get id")
    let clients = this.showClients[i];
    this.authServe.addClientInfo(clients, this.postData).subscribe( (res: any) => {
      console.log(res, "Add Customer Result")
      if(res.status == 1) {
        this.showClStatus = 0;
        this.router.navigate(['/home/workreport'], { queryParams: { 'year': this.postData.year, 'month': this.postData.month, 'client_id': clients.client_id, 'client_name': clients.client_name, 'client_report_flg': clients.client_report_flg, 'contract_type': clients.contract_type, 'end_contract_date': clients.end_contract_date,
        'individual_contract_id': clients.individual_contract_id, 'individual_contract_no': clients.individual_contract_no, 'max_width_time': clients.max_width_time, 'member_name': clients.member_name,
        'member_no_str': clients.member_no_str, 'min_width_time': clients.min_width_time, 'project_id': clients.project_id, 'project_name': clients.project_name, 'start_contract_date': clients.start_contract_date, 'status': clients.status, 'unit_name': clients.unit_name
       
      } });
        
      } else if(res.status == 2) {
        this.toastService.presentToast("Client info is already exist.")
      }
    });
  }
  
  downloadWrkPDF(routeDld: any, ): Observable<any> {
    /* this.authServe.downloadWrkPDF(this.postData).subscribe( (res: any) => {
      console.log(res, "download pdf")
    } ); */
    let url = "https://stgessence.phoenix.xyz"+ routeDld +"?member_id=" + this.postData.member_id + "&idname=" + this.postData.account + "&lang=" + this.postData.language + "&auth_token=" + this.postData.token + "&year=" + this.postData.year + "&month=" + this.postData.month + "&short_comp_name=yts";
    return this.http.get(url, {responseType: 'Bold'});
  }

  //remove client info
  delClientInfo(clid: any) {
    
    this.postData.workreport_client_id = this.data[clid].workreport_client_id;
    console.log(this.postData, "Delete Client")
 
    this.authServe.removeClientInfo(this.postData).subscribe( (res: any) => {
      console.log(res, "remove client info")
      if(res.status == 1) {
        this.toastService.presentToast(res.message);
        this.delFlg = 1;
      } else {
        this.toastService.presentToast("Something was wrong!");
      }
    } );
    
  }

  getContractTypeById(contractId: Number) {
    if( contractId == 1 ) {
      this.contractTypeName = "Monthly Contract";
    } else if ( contractId == 2 ) {
      this.contractTypeName = "Fixed Contract";
    } else if (contractId == 3) {
      this.contractTypeName = "Time Contract";
    } else {
      this.contractTypeName = "-";
    }
    return this.contractTypeName;
  }
  /* doRefresh(event) {
    console.log('Begin async operation');
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      this.getClientData();
      event.target.complete();
    });
    setTimeout(() => {
      console.log('Async operation has ended');
      
    }, 3000);
  } */

  /* getClientData() {
    this.postData.member_id = this.authUser.email;
    
    //console.log(this.postData);
   if (this.postData.member_id) {
      this.clientService.clientData(this.postData).subscribe(
        (res: any) => {
          console.log(res.project_info); //refresh data
          this.clientService.updateClientData(res.project_info);
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );

    } else {
      this.toastService.presentToast("loading ...");
    }

    //this.ngOnInit();
  } */

}
