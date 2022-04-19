import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { AuthService } from './../../services/auth.service';
import { ToastService } from './../../services/toast.service';
import { MenuController } from '@ionic/angular';
import {formatDate} from '@angular/common';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { CustomerWorkreportInfoService } from 'src/app/services/customer-workreport-info.service';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss']
})
export class FeedPage implements OnInit {
  public authUser: any;

  postData = {
    member_id: '',
    year: '',
    month: '',
    language: '',
    pages: '',
    token: ''
  };

  curtime: any;
  greetingmsg: String;
  newData: any;
  newDate: any;
  newMonth: any;
  dataLeng: any;

  tokenExpire:any= false;

  constructor(
    private auth: AuthService,
    private menu: MenuController,
    private router: Router,
    private route: ActivatedRoute,
    private customerServices: CustomerWorkreportInfoService,
    private langServe: LanguageService,
    private langSwitch: LanguageSwitchService
  ) {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      this.postData.token = this.authUser["access-token"];
      console.log( res.status, this.postData.token, "home 2");

      //check token session
      this.checkTokenSession();

      //check token is expire or not
      if(res.status == 0 || this.tokenExpire == 1) {
        this.logoutAction();
      }

    });

    
  }

  ngOnInit() {

    this.newDate = new Date().getFullYear();
    this.newMonth = new Date().getMonth();
    this.postData.year = this.newDate;
    this.postData.month = this.newMonth + 1;
    
    //console.log(this.authUser, "token check");

    this.curtime = formatDate(new Date(), 'HH', 'en');

    this.greetingMessage();

    //language switch
    this.languageDefault();

  }

  //logout action
  logoutAction() {
    this.auth.logout();
  }

  languageDefault() {
    
    // console.log("language selecct", this.postData);
     this.langSwitch.langSwitchData$.subscribe( (res: any) => {
 
       this.postData.language = res.language;
       console.log(this.postData.language, 'assign');
       
       if(!this.postData.language) {
         this.postData.language = 'en';
         console.log(this.postData, 'default');
       }
      
       this.postData.pages = 'home_mobile';
 
       this.langServe.languageData(this.postData).subscribe( (res: any) => {
         console.log(res.data, ' Home Page');
         this.dataLeng = res.data;
       });
 
     } );
 
  }

  //check token was expired or not
  checkTokenSession() {
    console.log(this.postData.token, "Token Session check is what Feed")
    this.auth.checkTokenSession(this.postData).subscribe( (res:any) => {
      console.log(res, "check Token Result is what Feed")
      this.tokenExpire = res.status;
    });

  }

  greetingMessage() {

    if (this.curtime <= 11) {
      this.greetingmsg = "Good Morning,";
    } else if (this.curtime <= 16) {
      this.greetingmsg = "Good Afternoon,";
    } else {
      this.greetingmsg = "Good Evening,";
    }

  }

  gotoPagesAction(urls: String, tabsopen: String) {
    this.router.navigate([urls], { queryParams: { year: this.postData.year, month: this.postData.month, tabs: tabsopen }});
  }

  //customer workreport data
  goMoreInfo(urls: String) {
    this.postData.member_id = this.authUser.email;
    //console.log(this.postData.month + " login");
    //search by date again
    this.customerServices.getcustomerData(this.postData).subscribe( (res: any) => {
      this.newData = res;
      //console.log(this.newData.customer_work_report);
      this.customerServices.updateCustomerData(res);

      let navigationExtras: NavigationExtras = {
        state: {
          special: this.newData.customer_work_report,
          year: this.postData.year,
          month: this.postData.month,
          tabs: "hello"
        }
      };
    
      this.router.navigate([urls], navigationExtras);
    });
    
  }


}
