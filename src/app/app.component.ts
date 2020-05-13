import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, NavParams, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Injectable } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { BuscaEventosPage } from '../pages/busca-eventos/busca-eventos';
import { RegistrarEventosPage } from '../pages/registrar-eventos/registrar-eventos';
import { SobrePage } from '../pages/sobre/sobre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;
  
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();
      statusBar.styleDefault();
      this.pages = [
        { title: "Home", component: HomePage},
        { title: "Sobre", component: SobrePage },
        { title: "Registrar Evento", component: RegistrarEventosPage },
        { title: "Login/Consulta", component: BuscaEventosPage }
      ];
    });
  }
}

