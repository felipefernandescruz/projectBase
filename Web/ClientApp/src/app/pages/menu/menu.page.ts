import { Component, OnInit } from '@angular/core';
import { LoggedModel } from 'src/app/shared/models/logged.model';
import { BasePage } from '../base.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage extends BasePage implements OnInit {
  public userPerfil: LoggedModel;

  pages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'pie'
    }
  ];

  constructor() {
    super();
    this.userPerfil = this.storageHelper.getLoggedModel();
  }

  ngOnInit() {}

  public onLogoffClick() {
    console.log('Teste');
    this.storageHelper.clearToken();
    this.router.navigateByUrl('login');
  }
}
