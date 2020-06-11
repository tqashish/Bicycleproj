import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddbiicycleComponent } from './addbiicycle/addbiicycle.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { YourbicyclesComponent } from './yourbicycles/yourbicycles.component';
import { BicycleupdateComponent } from './bicycleupdate/bicycleupdate.component';
import { CardComponent } from './card/card.component';
import { UserviewComponent } from './userview/userview.component';
import { LogoutComponent } from './logout/logout.component';


const approutes:Routes=[
    //{path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'Addbiicycle',component:AddbiicycleComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'cycles',component:YourbicyclesComponent},
  {path:'uview',component:UserviewComponent},
  {path:'cart',component:CardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'updt/:i',component:BicycleupdateComponent}
 

  // {path:'',redirectTo:'/home',pathMatch:'full'},
//  {path:'**' ,component:FilenotfoundComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddbiicycleComponent,
    HomeComponent,
    AboutusComponent,
    YourbicyclesComponent,
    BicycleupdateComponent,
    CardComponent,
    UserviewComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(approutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
