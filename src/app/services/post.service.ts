import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _postList: Post[] = [
    {
      title: "Fruity Dinos now available!",
      body: "<p>Did you know that not all the dinosaurs went extinct? Here on the planet Vegon C, there lives a fruitful bunch of dinosaurs that underwent a fantastic transformation. Come join your favorite dinosaurs as they transform from their scaly and feathery selves to a sweeter new life. Filled with wacky poetry and a fruit-acular transformation as they journey and grow adaptations to their new home.</p><h2 style=\"text-align:center\"><a href=\"https://www.amazon.com/Fruity-Dinos-Jessie-Davis/dp/B0BLG34XDM/ref=sr_1_1?crid=3II8IZNZ3IU3W&keywords=fruity+dinos+book&qid=1671877431&sprefix=fruity+dinos%2Caps%2C199&sr=8-1\">Buy it on Amazon</a></h2>",
      imageUrl: "assets/fruity-dinos.png",
      imageAlt: "Fruity Dinos Book Cover"
    }
  ];
  private postListSubject: BehaviorSubject<Post[]>;

  constructor() {
    this.postListSubject = new BehaviorSubject<Post[]>(this._postList);
   }

   public get postSubject() {
    return this.postListSubject;
   }


}
