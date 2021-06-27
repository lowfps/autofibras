import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { EspecialesComponent } from './components/especiales/especiales.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LavaderosComponent } from './components/lavaderos/lavaderos.component';
import { MesonesComponent } from './components/mesones/mesones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParquesBioComponent } from './components/parques-bio/parques-bio.component';
import { ParquesInfantilesComponent } from './components/parques-infantiles/parques-infantiles.component';
import { SilleteriaComponent } from './components/silleteria/silleteria.component';
import { TinasJacuzzisComponent } from './components/tinas-jacuzzis/tinas-jacuzzis.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'productos/lavaderos', component: LavaderosComponent},
  {path: 'productos/mesones', component: MesonesComponent},
  {path: 'productos/parques-bio', component: ParquesBioComponent},
  {path: 'productos/silleteria', component: SilleteriaComponent},
  {path: 'productos/especiales', component: EspecialesComponent},
  {path: 'productos/parques-infantiles', component: ParquesInfantilesComponent},
  {path: 'productos/tinas-jacuzzis', component: TinasJacuzzisComponent},
  {path: '**', component: NotFoundComponent}
];
const routerOptions: ExtraOptions={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
