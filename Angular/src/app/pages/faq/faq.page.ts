import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  

  displayUserData: any;
  dataLeng: any;
  authUser: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private langServe: LanguageService,
    private langSwitch: LanguageSwitchService,
    private authService: AuthService
  ) {
   
   }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.authUser = res;
      
    });
  }

  // getUserGuide() {
  //   console.log(this.postData, "PostData")
  //   this.auth.getUserGuide(this.postData).subscribe((res: any) => {
  //     console.log(res.data, "FAQ")
  //     this.userGuide = res.data;
  //   })
  // }

  gotoPagesAction(urls: String) {
    this.router.navigate([urls]);
  }

  // languageDefault() {
    
  //   // console.log("language selecct", this.postData);
  //    this.langSwitch.langSwitchData$.subscribe( (res: any) => {
 
  //      this.postData.lang = res.language;
  //      console.log(this.postData.lang, 'assign');
       
  //      if(!this.postData.lang) {
  //        this.postData.lang = 'en';
         
  //        console.log(this.postData.lang, 'default');
  //      }
      
  //      this.postData.filename = 'faq';
 
  //      this.langServe.languageData(this.postData).subscribe( (res: any) => {
  //       // console.log(res.data, ' work_report');
  //        this.dataLeng = res.data;
  //      });
 
  //    } );
 
  // }

}
