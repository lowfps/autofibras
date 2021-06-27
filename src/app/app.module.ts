import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LavaderosComponent } from './components/lavaderos/lavaderos.component';
import { MesonesComponent } from './components/mesones/mesones.component';
import { ParquesBioComponent } from './components/parques-bio/parques-bio.component';
import { SilleteriaComponent } from './components/silleteria/silleteria.component';
import { EspecialesComponent } from './components/especiales/especiales.component';
import { ParquesInfantilesComponent } from './components/parques-infantiles/parques-infantiles.component';
import { TinasJacuzzisComponent } from './components/tinas-jacuzzis/tinas-jacuzzis.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent, CarouselModule, OwlRouterLinkDirective } from 'ngx-owl-carousel-o';
import { RouterModule, ROUTES } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    LavaderosComponent,
    MesonesComponent,
    ParquesBioComponent,
    SilleteriaComponent,
    EspecialesComponent,
    ParquesInfantilesComponent,
    TinasJacuzzisComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
