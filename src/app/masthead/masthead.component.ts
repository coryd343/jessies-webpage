import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  showNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
