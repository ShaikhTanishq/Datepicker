import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TanishqComponent } from './tanishq/tanishq.component';
import { ShradhaComponent } from './shradha/shradha.component';
import { ShravyaComponent } from './shravya/shravya.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DaterangepickerComponent } from './daterangepicker/daterangepicker.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: TanishqComponent,
    path: 'tanishq'
  },
  {
    component: ShradhaComponent,
    path: 'shradha'
  },
  {
    component: ShravyaComponent,
    path: 'shravya'
  },
  {
    component: DatepickerComponent,
    path: 'datepicker'
  },
  {
    component: DaterangepickerComponent,
    path: 'daterangepicker'
  }
  /*{
    component: HomeComponent, 
        path: '' 
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
