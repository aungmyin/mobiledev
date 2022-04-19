import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.page.html',
  styleUrls: ['./user-guide.page.scss'],
})
export class UserGuidePage implements OnInit {
  postData = {
    filename: 'user_guide',
    language: '',
    token: ''
  }

  displayUserData: any;
  userGuide: any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
   
   }

  ngOnInit() {
    this.auth.userData$.subscribe( (res: any) => {
      //console.log(res);
      this.displayUserData = res;
      this.postData.token = this.displayUserData['access-token'];
      this.postData.language = 'en';
    });

    this.getUserGuide();
  }

  getUserGuide() {
    console.log(this.postData, "PostData")
    this.auth.getUserGuide(this.postData).subscribe((res: any) => {
      console.log(res.data, "User Guide")
      this.userGuide = res.data;
    })
  }

  gotoPagesAction(urls: String) {
    this.router.navigate([urls]);
  }

}
