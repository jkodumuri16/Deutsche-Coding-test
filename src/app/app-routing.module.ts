import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobeContainerComponent } from './components/globe-container/globe-container.component';


const routes: Routes = [
  {
    path: 'home',
    component: GlobeContainerComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
