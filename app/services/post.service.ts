import{Injectable} from '@angular/core';
import {Http} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import  'rxjs/Rx';
import  'rxjs/operator/map';



interface Post{
	_id:number,
	title:string,
	body:string
}

@Injectable()

export class PostService{
	private posts:any;
	private apiUrl:string;
	private postData:any;
	constructor(private _http:Http){
		this.apiUrl="https://jsonplaceholder.typicode.com/posts";

	}
	getPosts() : Observable<Post[]>{
		return this._http
		             .get(this.apiUrl)
		             .map((response)=>{
			           return response.json()
		});

	}
}