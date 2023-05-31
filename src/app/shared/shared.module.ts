import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [CommonModule, RouterModule, IonicModule],
  exports: [
    ...COMPONENTS
  ],
})
export class SharedModule {}
