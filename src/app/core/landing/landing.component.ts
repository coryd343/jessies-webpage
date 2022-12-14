import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  public posts: Post[];
  private postSubscription: Subscription;

  constructor(private postService: PostService, private route: ActivatedRoute, private title: Title) {
    title.setTitle(route.root.firstChild?.snapshot.data['title']);
   }

  ngOnInit(): void {
    this.postSubscription = this.postService.postSubject.subscribe((p) => {
      this.posts = p;
    });
  }

  ngOnDestroy(): void {
      this.postSubscription.unsubscribe();
  }

  replaceBodyContent(): void {

  }

}
