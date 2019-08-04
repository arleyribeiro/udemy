
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostsService {

    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();
    private apiRoot = "http://localhost:3000/";

    constructor(private http: HttpClient){}

    getPosts() {
        this.http.get<{message: string, posts: Post[]}>(this.apiRoot + "api/posts")
            .subscribe((postData) => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
            });
    }

    getPostsUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title:string, content:string) {
        const post : Post = {
            id: null,
            title: title,
            content: content
        };
        this.http.post<{ message: string }>(this.apiRoot + 'api/posts', post)
            .subscribe(res => {
                console.log(res.message);
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
            });
    }
}