import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  // {
  //  path:'',redirectTo:'parent',pathMatch:'full'
  // },
  // {
  //   path:'parent',component:ParentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
