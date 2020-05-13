import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaEventosPage } from './busca-eventos';

@NgModule({
  declarations: [
    BuscaEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaEventosPage),
  ],
})
export class BuscaEventosPageModule {}
