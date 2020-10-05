import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditTimelineComponent } from './reddit-timeline.component';

describe('RedditTimelineComponent', () => {
  let component: RedditTimelineComponent;
  let fixture: ComponentFixture<RedditTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
