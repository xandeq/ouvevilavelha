import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscaEventosPage } from '../busca-eventos/busca-eventos';
import { RegistrarEventosPage } from '../registrar-eventos/registrar-eventos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public NavPrms: NavParams) {
      
  }

  goToFormulario(id:string){
    this.navCtrl.push(RegistrarEventosPage, { idevento: id});
  }

  goToBuscaEventos(){
    this.navCtrl.push(BuscaEventosPage);
  }
}
