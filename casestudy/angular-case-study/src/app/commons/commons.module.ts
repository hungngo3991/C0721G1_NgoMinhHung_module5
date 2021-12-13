import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommonsRoutingModule} from './commons-routing.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';


@NgModule({
  declarations: [NavBarComponent, LeftSidebarComponent],
  exports: [NavBarComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ]
})
export class CommonsModule {
}
