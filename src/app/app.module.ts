import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { MulComponent } from './mul/mul.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { DivComponent } from './div/div.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddComponent,
    SubComponent,
    MulComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    FooterComponent,
    DivComponent,
    ContactusComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path:'addition',component:AddComponent },
        {path:'subtraction',component:SubComponent},
        {path:'mul',component:MulComponent},
        {path:'div',component:DivComponent},
        {path:'login',component:LoginComponent},
        {path:'reg',component:RegisterComponent},
        {path:'contact',component:ContactusComponent},
        {path:'about',component:AboutusComponent},
        {path:'category/:cat',component:CategoryComponent}
      ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }