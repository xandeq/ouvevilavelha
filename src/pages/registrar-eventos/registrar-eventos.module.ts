import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrarEventosPage } from './registrar-eventos';
import { Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    RegistrarEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonicSelectableModule
  ],
})
export class RegistrarEventosPageModule {}
