import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, Loading } from 'ionic-angular';
import { EventosProvider } from '../../providers/eventos/eventos';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { File } from '@ionic-native/file';
//import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicSelectableModule, IonicSelectableComponent } from 'ionic-selectable';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-registrar-eventos',
  templateUrl: 'registrar-eventos.html',
  providers: [EventosProvider]
})
export class RegistrarEventosPage {

  //private API_URL = "http://dev.vilavelha.local/ouvidoriaapi";
  //private API_URL = "http://localhost:60406";

  evento = {};
  lista_assuntos: Array<any>;
  lista_bairros: Array<any>;
  lista_tiposlogradouros: Array<any>;
  varTitulo;
  varTipoEvento;
  varTipoAnonimo;

  lastImage: string = null;
  loading: Loading;

  assuntovalor;
  bairrovalor;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventosProvider: EventosProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    //private camera: Camera, 
    //private transfer: Transfer, 
    //private file: File, 
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public platform: Platform) {

    this.navParams.get('idevento');
    if (this.navParams.get('idevento') == '1') {
      this.varTitulo = "Solicitação";
      this.varTipoEvento = '1';
    }
    else if (this.navParams.get('idevento') == '2') {
      this.varTitulo = "Reclamação";
      this.varTipoEvento = '2';
    }
    else if (this.navParams.get('idevento') == '4') {
      this.varTitulo = "Elogio/Sugestão";
      this.varTipoEvento = '4';
    }
    else if (this.navParams.get('idevento') == '5') {
      this.varTitulo = "Denúncia";
      this.varTipoEvento = '5';
    }
  }

  ionViewDidLoad() {
    this.ObterTodosAssuntos();
    this.ObterTodosBairros();
    this.ObterTodosTiposLogradouros();
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            //this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            //this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // let options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //   allowEdit: true,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   targetWidth: 500,
    //   targetHeight: 500,
    //   saveToPhotoAlbum: false
    // };

    // Get the data of an image
    // this.camera.getPicture(options).then((imagePath) => {
    //   // Special handling for Android library
    //   if (sourceType == 0) {
    //   //if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
    //     this.filePath.resolveNativePath(imagePath)
    //       .then(filePath => {
    //         let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
    //         let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
    //         this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //       });
    //   } else {
    //     var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
    //     var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
    //     this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    //   }
    // }, (erro) => {
    //   this.presentToast('Error while selecting image. CODE: ' + JSON.stringify(erro.code) + ' - MENSAGEM: ' + erro.message);
    // });
  }

  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    // this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    //   this.lastImage = newFileName;
    // }, erro => {
    //   this.presentToast('Error while storing file.  CODE: ' + JSON.stringify(erro.code) + ' - MENSAGEM: ' + erro.message);
    // });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  public uploadImage() {

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: { 'fileName': filename }
    };

    //const fileTransfer: TransferObject = this.transfer.create();

    this.loading = this.loadingCtrl.create({
      content: 'Enviando imagem...',
    });
    this.loading.present();

    // Use the FileTransfer to upload the image
    // fileTransfer.upload(targetPath, this.API_URL + "/upload", options).then(data => {
    //   this.loading.dismissAll()
    //   this.presentToast('Image succesful uploaded.');
    // }, erro => {
    //   this.loading.dismissAll()
    //   this.presentToast('Error while uploading file. CODE: ' + JSON.stringify(erro.code) + ' - MENSAGEM: ' + erro.message);
    // });
  }

  showAlert(mensagem: string) {
    let alert = this.alertCtrl.create({
      title: 'ATENÇÃO',
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

  public ObterTodosAssuntos() {
    //this.navParams.get('idevento');
    this.varTipoEvento = this.navParams.get('idevento');
    this.eventosProvider.ObterTodosAssuntos(this.varTipoEvento)
      .then(data => {
        const response = data as any;
        this.lista_assuntos = JSON.parse(JSON.stringify(response));
      });
  }

  public ObterTodosBairros() {
    this.eventosProvider.ObterTodosBairros()
      .then(data => {
        const response = data as any;
        this.lista_bairros = JSON.parse(JSON.stringify(response));
      });
  }

  public ObterTodosTiposLogradouros() {
    this.eventosProvider.ObterTodosTiposLogradouros()
      .then(data => {
        const response = data as any;
        this.lista_tiposlogradouros = JSON.parse(JSON.stringify(response));
      });
  }

  public CValue: String;
  onChange(CValue) {
    if (CValue == "1") {
      this.varTipoAnonimo = true;
    }
    else {
      this.varTipoAnonimo = false;
    }
  }

  public RegistrarEvento(evento: any = {}) {
    // var storage: Storage;
    var mensagemErro = "";
    if (!evento.nome && evento.tipo_cadastro_id != 1) {
      mensagemErro += "NOME, \n";
    }
    // if (!evento.cpf && evento.tipo_cadastro_id != 1) {
    //   mensagemErro += "CPF, \n";
    // }
    if (!evento.tipo_manifestante_id) {
      mensagemErro += "TIPO DE MANIFESTANTE, \n";
    }
    if (!evento.descricao) {
      mensagemErro += "DESCRIÇÃO, \n";
    }
    if (!evento.bairro_id) {
      mensagemErro += "BAIRRO, \n";
    }
    if(!evento.numero) {
      mensagemErro += "NÚMERO, \n"
    }
    if(!evento.assunto_id) {
      mensagemErro += "ASSUNTO, \n"
    }

    if (mensagemErro) {
      let msgErro = "Favor preencher o(s) campo(s): "
      msgErro += mensagemErro;
      this.presentToast(msgErro);
      //this.showAlert(mensagemErro);
    }
    else {
      let loader = this.loadingCtrl.create({
        content: "Por favor aguarde...",
        duration: 5000
      });
      loader.present();

      //console.log("EVENTO " + evento);
      //console.log("EVENTO.ASSUNTO_ID " + evento.assunto_id);
      //console.log("JSON.parse(JSON.stringify(evento.assunto_id)) " + JSON.parse(JSON.stringify(evento.assunto_id)));
      // console.log("JSON.parse(evento.assunto_id) " + JSON.parse(evento.assunto_id));
      // console.log("JSON.parse(evento.assunto_id) " + JSON.stringify(evento.assunto_id));

      evento.assunto_id = this.assuntovalor;
      evento.bairro_id = this.bairrovalor;
      console.log("evento.assunto_id "+evento.assunto_id);
      console.log("evento.bairro_id "+evento.bairro_id);
      console.log("evento.bairro_id.id "+evento.bairro_id.id);

      evento.assunto_id = this.assuntovalor;
      this.eventosProvider.RegistrarEvento(evento)
        .then(data => {
          const objeto_retorno = JSON.parse(JSON.stringify(data));
          if (objeto_retorno.id > 0) {
              this.storage.set('protocolo', objeto_retorno.protocolo);
              this.storage.get('protocolo').then((val) => {
            });
              this.storage.set('senha', objeto_retorno.senha);
              this.storage.get('senha').then((val2) => {
            });
            this.showAlert("EVENTO SALVO COM SUCESSO! <br /><br /> PROTOCOLO: <b>" + objeto_retorno.protocolo + "</b> <br /><br /> SENHA: <b>" + objeto_retorno.senha + "</b>");
            loader.dismiss();
          }
          evento = {};
        });
    }
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.assuntovalor = event.value.id;
  }

  portChangeBairro(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.bairrovalor = event.value.id;
  }
}