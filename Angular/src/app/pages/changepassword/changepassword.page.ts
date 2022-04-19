import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  activeMenu: String;

  dlyuser: any;

  postData = {
    company: '',
    email: '',
    member_id: '',
    account: '',
    old_password: '',
    new_password: '',
    token: '',
    language: '',
    pages: ''
  };

  dataLeng: any;

  constructor(
    private menu: MenuController, 
    private router: Router, 
    private toastService: ToastService, 
    private authoService: AuthService,
    private langSwitch: LanguageSwitchService,
    private langServe: LanguageService
    ) {
    //this.menuActive();
  }

  ngOnInit() {
    this.authoService.userData$.subscribe( (res: any) => {
      console.log(res);
     this.dlyuser = res;
    });

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
      
       this.postData.pages = 'changepass';
 
       this.langServe.languageData(this.postData).subscribe( (res: any) => {
         console.log(res.data, ' changepass');
         this.dataLeng = res.data;
       });
 
     } );
 
   }

  menuActive() {
    this.activeMenu = "first";
    this.menu.enable(false, "first");
  }

  validateInputs() {
    let new_password = this.postData.new_password.trim();
    let old_password = this.postData.old_password.trim();
    let email = this.postData.email.trim();

    return (
      new_password &&
      old_password &&
      new_password.length > 0 &&
      old_password.length > 0 
    );
  }

  changePasswordAction() {
    if(this.validateInputs()) {
      this.postData.token = this.dlyuser['access-token'];
      this.postData.company = this.dlyuser['company'];
      this.postData.email = this.dlyuser['email'];
      this.postData.account = this.dlyuser['name'];
      this.postData.member_id = this.dlyuser['member_id'];
      console.log(this.postData);
      this.authoService.updatepassword(this.postData).subscribe( (res: any) => {
        console.log(res);
        if(res.status == 1) {
          //console.log("changed");
          this.postData.new_password = '';
          this.postData.old_password = '';
          
          this.router.navigate(['home/messages']);
        } else if(res.error) {
          this.toastService.presentToast(res.message);
        } else {
          //console.log("something wrong!");
          this.toastService.presentToast(res[0]['password']);
        }
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      });

    } else {
      this.toastService.presentToast(
        'Please enter new password or old password.'
      );
    }
  }

  gotoPagesAction(urls: String) {
    this.router.navigate([urls]);
  }

}
