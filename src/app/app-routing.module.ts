import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';
import { BlogComponent } from './core/blog/blog.component';
import { AboutComponent } from './core/about/about.component';
import { GalleryComponent } from './core/gallery/gallery.component';
import { StoreComponent } from './core/store/store.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "blog", component: BlogComponent },
  { path: "about", component: AboutComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "store", component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
