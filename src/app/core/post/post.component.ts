import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() body: string;
  @Input() imageUrl: string;
  @Input() imageAlt: string;
  @ViewChild('postBody') bodyElementRef: ElementRef;

  constructor(private postService: PostService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
      this.bodyElementRef.nativeElement.innerHTML = this.body;
  }

}
