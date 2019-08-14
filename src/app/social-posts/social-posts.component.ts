import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [];
  showForm: boolean = false;
  constructor() {}

  onRemoveHandler(index): void {
    this.posts.splice(index, 1);
  }

  onAddHandler(newPostItem: object): void {
    this.posts.push(newPostItem);
    this.toggleForm();
    console.log(this.posts);
  }

  toggleForm(): void {
    //reassigns boolean. if false, becomes true or if true, becomes false.
    this.showForm = !this.showForm;
  }

  ngOnInit() {}
}
