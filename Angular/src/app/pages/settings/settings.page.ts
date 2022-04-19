import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { Router } from '@angular/router';

function helloalert() {
  alert('Hello!!!');
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


export class SettingsPage implements OnInit {

  postData = {
    language: ''
  }

  displayUserData: any;

  constructor(
    private authoService: AuthService, 
    private langServe: LanguageService, 
    private langSwitch: LanguageSwitchService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authoService.userData$.subscribe( (res: any) => {
      //console.log(res);
      this.displayUserData = res;
    });

    this.languageSwitch('');
  }

  logoutAction() {
    this.authoService.logout();
    //location.reload(true);
  }

  //language switch control
  languageSwitch(newLang: any) {
    if (newLang.length > 0 ) {
      this.postData.language = newLang;
    } else {
      this.postData.language = "en";
    }

    this.langSwitch.updateLangSwitchData(this.postData);
  }

  changeLanguageClick() {
    //change language depend on user select
    this.languageSwitch(this.postData.language);
   // console.log(this.postData.language, " selected");
  }

  gotoPagesAction(urls: String) {
    this.router.navigate([urls]);
  }
  

}
