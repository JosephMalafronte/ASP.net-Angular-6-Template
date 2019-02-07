import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule
  ]
})

export class AngMaterialModule { }
