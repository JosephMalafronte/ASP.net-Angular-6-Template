import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatToolbarModule, MatCardModule],
  exports: [MatButtonModule, MatSliderModule, MatToolbarModule, MatCardModule]
})

export class AngMaterialModule { }
