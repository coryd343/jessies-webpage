import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title) {
    title.setTitle(route.root.firstChild?.snapshot.data['title']);
  }

  ngOnInit(): void {
  }

}
