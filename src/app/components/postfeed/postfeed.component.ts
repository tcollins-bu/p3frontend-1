import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Feed } from 'src/app/Feed';
import { Users } from 'src/app/models/user';
import { Post } from 'src/app/Post';
import { FollowerService } from 'src/app/services/follower.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.scss'],
})
export class PostfeedComponent implements OnInit {
  followed = [];
  followedIdArr = [];
  posts: Post[] = [];
  comments: Post[] = [];
  tId: number = 0;
  feed: Feed | undefined;
  user!: Users;

  constructor(
    private pService: PostService,
    private uService: UserService,
    private fService: FollowerService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.pService.getPosts().subscribe((posts: Post[]) => {
      this.getUser();
      this.getAllFollowers();
      this.posts = posts;
      this.posts.reverse();
      this.filterPosts(posts);
      setTimeout(() => {
        this.filterFollowingPosts();
      }, 500);
    });
  }

  private getUser() {
    let user = sessionStorage.getItem('auth-user');
    let userId = user?.charAt(6);
    this.uService.getUserById(Number(userId)).subscribe((lUser: Users) => {
      this.user = lUser;
      localStorage.setItem('firstName', this.user.firstName);
      localStorage.setItem('lastName', this.user.lastName);
      localStorage.setItem('userId', this.user.userId.toString());
    });
  }

  private filterPosts(posts: Post[]) {
    this.posts = posts.filter((p) => {
      return p.type == 'post';
    });
    this.comments = posts.filter((p) => {
      return p.type != 'post';
    });
  }

  private filterFollowingPosts() {
    this.followed.forEach((f) => {
      console.log('called');
      this.followedIdArr.push(f.followedId);
      console.log(this.followedIdArr);
    });
    this.posts = this.posts.filter((p) => {
      return this.followedIdArr.includes(p.usersId);
    });
    console.log(this.posts);
  }

  getAllFollowers() {
    this.fService.getFollowers().subscribe((following) => {
      this.followed = following.filter((f) => {
        return f.followerId == Number(localStorage.getItem('userId'));
      });
      console.log(this.followed);
    });
  }

  addPost(post: Post) {
    let type = post.type;
    this.pService.addPost(post).subscribe((post: Post) => {
      type === 'post' ? this.posts.push(post) : this.comments.push(post);
      this.ngOnInit();
    });
  }
}
