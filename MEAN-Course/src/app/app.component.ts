import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-course';
  storedPosts = [];

  onPostAdded(post) {
      this.storedPosts.push(post);
  }
}
