import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageSwitchService } from 'src/app/services/language-switch.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Input() loginUser: any;

  postData = {
    language: '',
    pages: '',
    token: '',
    email: '',
    member_id: ''

  }

  activeMenu: String;

  displayUserData: any;

  UserProfile: any;
  memberNo: String;
  fmmemberNo: String;
  author_type: any = [];
  authorityName: String;
  empTypeName: String;
  empStatusName: String;

  dataLeng: any;

  constructor(
    private profileService: ProfileService, 
    private router: Router, 
    private authService: AuthService,
    private langServe: LanguageService,
    private langSwitch: LanguageSwitchService
    ) {

     }

  ngOnInit() {
    this.authService.userData$.subscribe( (res: any) => {
      //console.log(res.email);
      this.displayUserData = res;

      this.postData.token = res['access-token'];
      this.getCurrentUserProfile();

    });
    

    this.authority(this.loginUser);

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
     
      this.postData.pages = 'employee_detail';

      this.langServe.languageData(this.postData).subscribe( (res: any) => {
       // console.log(res.data, ' title');
        this.dataLeng = res.data;
      });

    } );

  }

  getCurrentUserProfile() {

    this.postData.token = this.displayUserData['access-token'];
    this.postData.email = this.displayUserData.member_id;
    //console.log(this.postData, "user id");
    this.profileService.profileData(this.postData).subscribe( (res: any) => {
        console.log(res.show_detail, "profile show detail");
        this.UserProfile = res.show_detail;

        //member no format
        this.memberNoFormat(res.show_detail.member_no);
        // authority type display text
        this.authority(this.UserProfile.authority_type);
        // employment type display by text
        this.employmentType(this.UserProfile.employment_type);
        //employment status display by text dfdf
        this.employmentStatus(this.UserProfile.employment_status);

    });

  }

  //format date
  calculateDiff(data, addOne: number){
    let date = new Date(data);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    days = Math.floor(days/365) + addOne;
    return '(' + days + ') Years';
  }

  //different between 2 date
  dateDiffInDays(date1, date2) {
    // round to the nearest whole number
    return Math.round((date2-date1)/(1000*60*60*24));
  }

   memberNoFormat(mbno: String) {
    if( mbno.toString().length == 3 ) {
      this.fmmemberNo = "0" + mbno;
    } else if (mbno.toString().length == 2) {
      this.fmmemberNo = "00" + mbno;
    } else if (mbno.toString().length == 1) {
      this.fmmemberNo = "000" + mbno;
    } else {
      this.fmmemberNo = mbno;
    }
  }

   authority(authId: Number) {
    if(authId == 2) {
      this.authorityName = "Admin User";
    } else if(authId == 3) {
      this.authorityName = "Manage User";
    } else if(authId == 4) {
      this.authorityName = "Basic User";
    } else {
      this.authorityName = "";
    }
  }

  employmentType(empId: Number) {
    if(empId == 0) {
      this.empTypeName = "Executives";
    } else if(empId == 1) {
      this.empTypeName = "Regular Employees";
    } else if(empId == 2) {
      this.empTypeName = "Contract Employees";
    } else if(empId == 3) {
      this.empTypeName = "Part Time";
    } else if(empId == 4) {
      this.empTypeName = "Side Job";
    } else {
      this.empTypeName = "";
    }
  }

  employmentStatus(empStatus: Number) {
    if(empStatus == 1) {
      this.empStatusName = "Enrolled";
    } else if(empStatus == 2) {
      this.empStatusName = "Suspended";
    } else if(empStatus == 3) {
      this.empStatusName = "Retired";
    } else {
      this.empStatusName = "";
    }
  }

 
  changePasswordAction() {
    this.router.navigate(['home/changepassword']);
  }

}
