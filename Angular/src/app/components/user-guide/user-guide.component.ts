import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-user-guide-com',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.scss'],
})
export class UserGuideComponent implements OnInit {

  @Input() loginUser: any;

  postData = {
    language: '',
    pages: '',
    token: '',
    email: '',
    member_id: ''

  }

  displayUserData: any;
  userGuide: any;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private langSwitch: LanguageSwitchService,
    private langServe: LanguageService
    ) { }

  ngOnInit() {
    this.authService.userData$.subscribe( (res:any) => {
      this.displayUserData = res;

      this.postData.token = res['access-token'];
      this.languageDefault();
    } );
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
      
       this.postData.pages = 'user_guide';
 
       this.langServe.languageData(this.postData).subscribe( (res: any) => {
         console.log(res.data, ' title');
         this.userGuide = res.data;
       });
 
     } );
 
   }

}
