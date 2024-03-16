import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { AboutComponent } from './ui/about/about.component';
import { ProductComponent } from './ui/product/product.component';
import { GalleryComponent } from './ui/gallery/gallery.component';
import { ContactComponent } from './ui/contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
