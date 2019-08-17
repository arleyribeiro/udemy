import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent implements OnInit {
    enteredTitle = '';
    enteredContent = '';
    post: Post;
    isLoading = false;
    private mode = 'create';
    private postId: string;

    constructor(private postsService: PostsService, 
                private route: ActivatedRoute){}

    ngOnInit() {
        this.post = {
            id: '',
            title: '',
            content: ''
        };
        this.route.paramMap.subscribe((paranMap: ParamMap) => {
            if(paranMap.has('postId')) {
                this.isLoading = true;
                this.mode = 'edit';
                this.postId = paranMap.get('postId');
                this.post = this.postsService.getPost(this.postId);  
                this.isLoading = false;              
            }else {
                this.mode = 'create';
                this.postId = null;
            }
        });
    }

    onSavePost(form: NgForm) {
        if(form.invalid)
            return;

        this.isLoading = true;
        if(this.mode === 'create') {
            this.postsService.addPost(form.value.title, form.value.content);
        } else {
            this.postsService.updatePost(this.postId, form.value.title, form.value.content);
        }
        form.resetForm();
    }
}