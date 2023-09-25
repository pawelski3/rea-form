import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NowyFormComponent } from './nowy-form/nowy-form.component';
import { TwocomponentComponent } from './twocomponent/twocomponent.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { WarningComponent } from './warning/warning.component';
import { FourComponent } from './four/four.component';
import { Text3dComponent } from './text3d/text3d.component';
import { ServiceCurrService } from './service-curr.service';
import { HttpClientModule } from '@angular/common/http';

export const appRouters: Routes = [
  { path: '', component: OneComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  {
    path: 'three', component: ThreeComponent,
    data: [{ version: '1.1.8' }]
  },
  { path: 'four/:idOffer', component: FourComponent },
  { path: '**', component: WarningComponent },


]


@NgModule({
  declarations: [
    AppComponent,
    NowyFormComponent,
    TwocomponentComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    WarningComponent,
    FourComponent,
    Text3dComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    RouterModule.forRoot(appRouters),
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceCurrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
