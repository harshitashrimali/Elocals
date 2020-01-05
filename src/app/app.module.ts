import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProdColoredComponent } from './compoment/prod-colored/prod-colored.component';
import { ProdOutlineComponent } from './compoment/prod-outline/prod-outline.component';
import { HomeComponent } from './compoment/home/home.component'
import { RouterModule } from '@angular/router';
import {  MatSidenavModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    ProdColoredComponent,
    ProdOutlineComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule ,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent


      },
      {
      path: 'prod-colored',
        component: ProdColoredComponent
      },
      {
        path:'prod-outline',
        component:ProdOutlineComponent
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
