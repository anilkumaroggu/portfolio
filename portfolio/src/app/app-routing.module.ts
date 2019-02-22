import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent} from './nav/nav.component';



const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
  { path: 'home' , component: HomeComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'nav', component: NavComponent}
];
@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
