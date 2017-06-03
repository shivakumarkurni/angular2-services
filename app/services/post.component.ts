import {Component} from '@angular/core';
import {PostService} from './post.service';

@Component({
	selector:'posts',
	template:`
	         <div class="container">
	         <h1>My Blog</h1>
	         <br>
	         <div>
                <label>Title:</label>
                <input type="text"[(ngModel)]="title"/><br>
                <label>Body:</label>
                <input type="text" [(ngModel)]="body"/><br>
                <input class="btn btn-primary" type="button" (click)="addNewPost()" value="Add Post"/>
	         </div>
	         <ul *ngFor="let post of posts">
	          <li>{{post.title}}</li>
	          <li>{{post.body}}</li>
	         </ul>
	         </div>

	          `
})

export class PostComponent{

	private posts:any[];

	private title:string;
	private body:string;

	private newPost:any;

	constructor(private _postService :  PostService){
		this._postService.getPosts().subscribe(response=>{
			this.posts=response
		});

	}
}