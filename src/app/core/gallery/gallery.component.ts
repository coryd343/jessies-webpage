import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title) {
    title.setTitle(route.root.firstChild?.snapshot.data['title']);
  }

  ngOnInit(): void {
  }

}
