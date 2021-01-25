import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  token: string = "";
  user: any;
  email: string = "";
  localStorageUtils = new LocalStorageUtils();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateMenu(url){
    this.router.navigate([url]);
  }

  userIsAuthenticated(): boolean {
    this.token = this.localStorageUtils.getUserToken();
    this.user = this.localStorageUtils.getUser();
    if (this.user)
      this.email = this.user.email;
    return this.token !== null;
  }

  logout() {
    this.localStorageUtils.cleanUserLocalData();
    this.router.navigate(['/home']);
  }
}