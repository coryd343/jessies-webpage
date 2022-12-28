import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';
import { BlogComponent } from './core/blog/blog.component';
import { AboutComponent } from './core/about/about.component';
import { GalleryComponent } from './core/gallery/gallery.component';
import { StoreComponent } from './core/store/store.component';

const routes: Routes = [
  { path: "", component: LandingComponent, data: {title: "Jessie Davis | Author & Illustrator"} },
  // { path: "blog", component: BlogComponent, data: {title: "Jessie Davis | Blog"} },
  { path: "about", component: AboutComponent, data: {title: "Jessie Davis | About"} },
  // { path: "gallery", component: GalleryComponent, data: {title: "Jessie Davis | Gallery"} },
  // { path: "store", component: StoreComponent, data: {title: "Jessie Davis | Store"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
