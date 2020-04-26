import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AddDefectComponent } from './add-defect/add-defect.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'add', component: AddDefectComponent, canActivate: [AuthGuard]  },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard]  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
