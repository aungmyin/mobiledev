import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FaqService } from 'src/app/services/faq.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {

  postData = {
    filename: 'faq',
    language: '',
    token: '',
    pages: ''
  }

  authUser: any;
  dataLeng: any;
  userGuide: any;

  constructor(
    private faqService: FaqService,
    private authService: AuthService,
    private langSwitch: LanguageSwitchService,
    private langServe: LanguageService,
    
  ) { }

  ngOnInit() {
    this.authService.userData$.subscribe((res: any) => {
      this.authUser = res;
      this.postData.token = res['access-token'];
      //this.getUserGuide();
      this.languageDefault();
    });

    
  }

  languageDefault() {
    
     console.log("language selecct", this.postData);
     this.langSwitch.langSwitchData$.subscribe( (res: any) => {
 
       this.postData.language = res.language;
       console.log(this.postData.language, res, 'assign');
       
       if(!this.postData.language) {
         this.postData.language = 'en';
         
         console.log(this.postData.language, 'default');
       }
      
       this.postData.pages = 'faq';
 
       this.langServe.languageData(this.postData).subscribe( (res: any) => {
         console.log(res.data, ' work_report');
         this.userGuide = res.data;
       });
 
     } );
 
  }

  /* getUserGuide() {

    this.postData.token = this.authUser['access-token'];
    console.log(this.postData, "PostData lang")
 
    this.faqService.faqData(this.postData).subscribe( (res: any) => {

      this.postData.language = res.language;
      this.userGuide = res.data;
      console.log(res, 'assign');
      
      if(!this.postData.language) {
        this.postData.language = 'en';
        console.log(this.postData.language, 'default');
      }
     
      // this.postData.language = 'faq';

      // this.faqService.faqData(this.postData).subscribe( (res: any) => {
      //   console.log(res.data, ' title');
      //   this.userGuide = res.data;
      // });

    } );
  } */

}
