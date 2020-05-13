import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  public varTitulo;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('idevento');
    if(this.navParams.get('idevento') == '1')
    {
      this.varTitulo = "Solicitação";
    }
    else if(this.navParams.get('idevento') == '2')
    {
      this.varTitulo = "Reclamação";
    }
    else if(this.navParams.get('idevento') == '4')
    {
      this.varTitulo = "Elogio/Sugestão";
    }
    else if(this.navParams.get('idevento') == '5')
    {
      this.varTitulo = "Denúncia";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
