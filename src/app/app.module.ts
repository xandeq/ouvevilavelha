import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormularioPage } from '../pages/formulario/formulario';
import { EventosProvider } from '../providers/eventos/eventos';
import { BuscaEventosPage } from '../pages/busca-eventos/busca-eventos';
import { RegistrarEventosPage } from '../pages/registrar-eventos/registrar-eventos';
import { SobrePage } from '../pages/sobre/sobre';
import { IonicStorageModule } from '@ionic/storage';

//import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { IonicSelectableModule } from 'ionic-selectable';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormularioPage,
    BuscaEventosPage,
    RegistrarEventosPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicSelectableModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormularioPage,
    BuscaEventosPage,
    RegistrarEventosPage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EventosProvider,
    //File,
    //Transfer,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
