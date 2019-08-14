import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
//interface path below
import { Post } from "src/app/interfaces/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() postIndex: number;
  @Output() onRemove = new EventEmitter<any>();
  constructor() {}

  removePost(index: number): void {
    console.log(index);
    this.onRemove.emit(index);
  }

  ngOnInit() {}
}
