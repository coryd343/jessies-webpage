import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(private route: ActivatedRoute, private title: Title) {
    title.setTitle(route.root.firstChild?.snapshot.data['title']);
  }

  ngOnInit(): void {
  }

}
