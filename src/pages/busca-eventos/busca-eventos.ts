import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos/eventos';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AlertController } from 'ionic-angular';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the BuscaEventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca-eventos',
  templateUrl: 'busca-eventos.html',
  providers: [EventosProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class BuscaEventosPage {
  //@ViewChild('input') myInput ;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventosProvider: EventosProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private changeDetection: ChangeDetectorRef
  ) {
    console.log("passo aqui 5");
  }
  
  // VARIAVEIS
  buscaId;
  buscaNome;
  buscaProtocolo;
  buscaDescricao;
  buscaSituacao;
  buscaTipoEvento;
  buscaDataCriacao;
  buscaAssunto;
  buscaRua;
  buscaBairro;
  buscaRespostas = new Array<any>();
  show: boolean;
  show2: boolean = false;
  showAcompanhamentos: boolean;
  lista_acompanhamentos: Array<any>;
  varProtocolo;
  varSenha;
  objetoRetorno: any;
  public varDados: any;
  public varDadosLista = new Array<any>();
  keys: String[];

  ionViewDidLoad() {
    console.log("passo aqui 6");
    this.storage.get('protocolo').then((val) => {
      console.log('PROTOCOLO BUSCA: ', val)
      this.varProtocolo = val;
    });
    this.storage.get('senha').then((val2) => {
      console.log('SENHA BUSCA: ', val2)
      this.varSenha = val2;
    });

    setTimeout(() => {
      //   this.myInput.setFocus();
      this.changeDetection.detectChanges();
    }, 1000);

    let protocolobuscado = window.localStorage.getItem('protocolobuscado');
    let senhabuscado = window.localStorage.getItem('senhabuscado');
    let showbuscado = window.localStorage.getItem('showbuscado');
    if(showbuscado == 'true')
    {
      console.log("passo aqui 4");
      //this.show = true;
    }

    if(protocolobuscado === 'undefined' && protocolobuscado != null && 
    senhabuscado === 'undefined' && senhabuscado != null){
      this.buscarEvento(protocolobuscado, senhabuscado);
    }
  }

  showAlert(titulo: string, mensagem: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

  public ConsultarEvento(protocolo: string, senha: string) {
    this.show = true;
    //console.log("passo aqui 3");
    this.buscarEvento(protocolo, senha);
  }

  buscarEvento(protocolo: string, senha: string) {
    let loader = this.loadingCtrl.create({
      content: 'Buscando informações do evento para você...'
    });
    loader.present().then(() => {
      this.eventosProvider.ConsultarEvento(protocolo, senha)
        .then(data => {
          const objeto_retorno = JSON.parse(JSON.stringify(data));
          this.lista_acompanhamentos = objeto_retorno.acompanhamentos;
          if (objeto_retorno.id == "0" || objeto_retorno.id == null) {
            this.show = false;
            console.log("passo aqui 2");
            //this.show2 = true;
            //this.showAcompanhamentos = false;
            this.showAlert('Evento não encontrado!', 'Favor, digitar novamente o protocolo e a senha corretamente.');
            window.localStorage.setItem('show', 'false');
          }
          else {
            console.log("" + objeto_retorno);
            console.log("" + this.objetoRetorno);
            this.objetoRetorno = objeto_retorno;

            // window.localStorage.setItem('protocolobuscado', protocolo);
            // window.localStorage.setItem('senhabuscado', senha);
            // window.localStorage.setItem('showbuscado', 'true');
            // window.localStorage.setItem('id', objeto_retorno.id);

            this.buscaId = objeto_retorno.id;
            this.buscaNome = objeto_retorno.nome;
            this.buscaProtocolo = objeto_retorno.protocolo;
            this.buscaDescricao = objeto_retorno.descricao;

            this.buscaSituacao = objeto_retorno.situacoes === undefined || objeto_retorno.situacoes === null ? "" : objeto_retorno.situacoes.descricao;
            this.buscaTipoEvento = objeto_retorno.tipo_eventos === undefined || objeto_retorno.tipo_eventos === null ? "" : objeto_retorno.tipo_eventos.descricao;
            this.buscaDataCriacao = objeto_retorno.created;
            this.buscaAssunto = objeto_retorno.assuntos === undefined || objeto_retorno.assuntos === null ? "" : objeto_retorno.assuntos.descricao;
            this.buscaRua = objeto_retorno.rua;
            this.buscaBairro = objeto_retorno.bairros === undefined || objeto_retorno.bairros === null ? "" : objeto_retorno.bairros.descricao;

            //this.show = false;
            this.show = true;
            this.show2 = false;
            this.showAcompanhamentos = true;

            console.log("passo aqui 1");
          }

          loader.dismiss();

        }).catch(error => {

          loader.dismiss();
          this.showAlert('Erro!', error)

        });
    });
  }
}
