import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FilePickerModule } from  'ngx-awesome-uploader-v2';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { UploadComponent } from './upload/upload.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AddDefectComponent } from './add-defect/add-defect.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AddEditorComponent } from './add-editor/add-editor.component';
import { AddUploadComponent } from './add-upload/add-upload.component';
import { AboutComponent } from './about/about.component';
import { InformationsComponent } from './informations/informations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavComponent,
    UploadComponent,
    JumbotronComponent,
    CardsComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AddDefectComponent,
    GalleryComponent,
    AddEditorComponent,
    AddUploadComponent,
    AboutComponent,
    InformationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    FilePickerModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
