import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RedditTimelineComponent } from './reddit-timeline/reddit-timeline.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AppComponent, RedditTimelineComponent, PostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
