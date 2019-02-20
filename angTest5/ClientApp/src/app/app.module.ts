import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './angmaterial';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CardFancyComponent } from './home/cards/cardFancy.component';
import { PopupModal } from './home/home.component';
import { InvoiceDatatableComponent } from './invoice-datatable/invoice-datatable.component';
import { CdkDetailRowDirective } from './invoice-datatable/cdk-detail-row.directive';





@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavToolbarComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CardFancyComponent,
    PopupModal,
    InvoiceDatatableComponent,
    CdkDetailRowDirective
  ],
  entryComponents: [PopupModal],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    AngMaterialModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
