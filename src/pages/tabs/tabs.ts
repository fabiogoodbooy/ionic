import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Userslist } from '../users/list/userslist';
import { Useradd } from '../users/add/useradd';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Userslist;
  tab5Root = Useradd;
  tab6Root =LoginPage;

  constructor() {

  }
}
