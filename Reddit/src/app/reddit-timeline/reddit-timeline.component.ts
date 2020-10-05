import { Component, OnInit } from '@angular/core';
import { RedditService } from '../service/reddit.service';

@Component({
  selector: 'app-reddit-timeline',
  templateUrl: './reddit-timeline.component.html',
  styleUrls: ['./reddit-timeline.component.css'],
})
export class RedditTimelineComponent implements OnInit {
  posts = [];
  constructor(private redditService: RedditService) {}

  ngOnInit(): void {
    this.redditService.getRedditData().subscribe((res: any) => {
      this.posts = res.data.children;
      console.log(res.data.children);
    });
  }
}
