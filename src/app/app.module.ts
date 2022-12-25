import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { LandingComponent } from './core/landing/landing.component';
import { NavComponent } from './masthead/nav/nav.component';
import { BlogComponent } from './core/blog/blog.component';
import { GalleryComponent } from './core/gallery/gallery.component';
import { StoreComponent } from './core/store/store.component';
import { AboutComponent } from './core/about/about.component';
import { MastheadComponent } from './masthead/masthead.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './core/post/post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    BlogComponent,
    GalleryComponent,
    StoreComponent,
    AboutComponent,
    MastheadComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
