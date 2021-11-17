import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostfeedComponent } from './components/postfeed/postfeed.component';

import { CreatepostComponent } from './components/createpost/createpost.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostfeedComponent,
    CreatepostComponent,
    PostItemComponent,
    CommentsComponent,
  ],

  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
