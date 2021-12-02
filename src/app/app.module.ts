import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { PostfeedComponent } from './components/postfeed/postfeed.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { CreatepostComponent } from './components/createpost/createpost.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FollowingComponent } from './components/following/following.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PostfeedComponent,
    PostItemComponent,
    CreateCommentComponent,
    CreatepostComponent,
    SidePanelComponent,
    UserPanelComponent,
    CommentsComponent,
    FollowingComponent,
    FollowButtonComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
