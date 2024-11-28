import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NovedadComponent } from './components/novedad/novedad.component';
import { NovedadFormComponent } from './components/novedad-form/novedad-form.component';
import { HomeComponent } from './components/home/home.component';
import { MedicoFormComponent } from './components/medico-form/medico-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register/:id', component: RegisterComponent},
    {path:'novedades', component:NovedadComponent},
    {path:'novedad-form', component:NovedadFormComponent},
    {path:'home', component:HomeComponent},
    {path: "medico-form", component: MedicoFormComponent},
    {path:'dashboard', component:DashboardComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'medico-form/:id', component: MedicoFormComponent},
    {path: 'novedad', component: NovedadComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
})
export class AppRoutingModule { }
