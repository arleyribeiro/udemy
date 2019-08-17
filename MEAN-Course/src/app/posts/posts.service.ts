
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class PostsService {

    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();
    private apiRoot = "http://localhost:3000/";

    constructor(private http: HttpClient,
                private router: Router){}

    getPosts() {
        this.http.get<{message: string, posts: any}>(this.apiRoot + "api/posts")
            .pipe(map((postData) => {
                return postData.posts.map(post => {
                    return {
                        id: post._id,
                        title: post.title,
                        content: post.content
                    }
                });
            }))
            .subscribe((transformedPosts) => {
                this.posts = transformedPosts;
                this.postsUpdated.next([...this.posts]);
            });
    }

    getPostsUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    getPost(id: string) {
        return {...this.posts.find(post => post.id == id)}
    }

    addPost(title:string, content:string) {
        const post : Post = {
            id: null,
            title: title,
            content: content
        };
        this.http.post<{ message: string, postId: string }>(this.apiRoot + 'api/posts', post)
            .subscribe(res => {
                console.log(res.message);
                const id = res.postId;
                post.id = id;
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
                this.router.navigate(["/"]);
            });
    }

    updatePost(id: string, title: string, content: string) {
        const post : Post = {
            id: id,
            title: title,
            content: content
        }
        this.http.put<{ message: string}>(this.apiRoot + 'api/posts/' + id, post)
            .subscribe(res => {
                const updatedPosts = [...this.posts];
                const oldPostIndex = updatedPosts.findIndex(p => p.id == post.id);
                updatedPosts[oldPostIndex] = post;
                this.posts = updatedPosts;
                this.postsUpdated.next([...this.posts]);
                this.router.navigate(["/"]);
            })
    }

    deletePost(postId: string) {
        this.http.delete(this.apiRoot + 'api/posts/'+ postId)
            .subscribe(res => {
                const updatedPosts = this.posts.filter(post => post.id !== postId);
                this.posts = updatedPosts;
                this.postsUpdated.next([...this.posts]);
            });
    }
}