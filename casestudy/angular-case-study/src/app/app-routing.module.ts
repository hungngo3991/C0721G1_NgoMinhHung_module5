import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


const routes: Routes = [
  {
    path: 'customer-type',
    loadChildren: () => import('./customer-type/customer-type.module').then(module => module.CustomerTypeModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), Ng2SearchPipeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
