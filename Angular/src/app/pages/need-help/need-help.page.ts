import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.page.html',
  styleUrls: ['./need-help.page.scss'],
})
export class NeedHelpPage implements OnInit {

  helpHtml: any;

  postData = {
    language: ''
  }

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private router: Router,
    private langSwitch: LanguageSwitchService,

  ) { }

  ngOnInit() {
    //this.http.get('http://ocjapan-hr.com/html.php?app=mob',{responseType:'text'}).subscribe(res=>{
    //this.helpHtml = this.sanitizer.bypassSecurityTrustHtml(res);
    //});
    this.languageDefault();
  }

  gotoPagesAction(urls: String) {
    this.router.navigate([urls]);
  }

  languageDefault() {
    
    // console.log("language selecct", this.postData);
     this.langSwitch.langSwitchData$.subscribe( (res: any) => {
 
       this.postData.language = res.language;
       console.log(this.postData.language, 'assign');
       
       if(!this.postData.language) {
         this.postData.language = 'en';
         //console.log(this.postData.language, 'default');
       }
      
 
     } );
 
   }
}
