import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { DemoprojectComponent } from './component/demoproject/demoproject.component';

import { SkillsComponent } from './component/skills/skills.component';

import { ToastrModule } from 'ngx-toastr';

import { ContactFormComponent } from  './component/contact/contact.component';


const appRoutes : Routes = [ 
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactFormComponent},
  {path:'demoproject', component: DemoprojectComponent},
  {path:'skills', component: SkillsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DemoprojectComponent,
    ContactFormComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
  })
  ],
  providers: [
],
exports: [ContactFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
