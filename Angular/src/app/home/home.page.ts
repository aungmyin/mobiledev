import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  activeMenu: String;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.close();
    this.menuActive();
  }

  menuActive() {
    this.activeMenu = "first";
    this.menu.enable(true, "first");
  }


}
