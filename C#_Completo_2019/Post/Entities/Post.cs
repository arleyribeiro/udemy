using System;
using System.Collections.Generic;
using System.Text;

namespace Post.Entities
{
    public class Post
    {
        public DateTime Moment { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }
        public List<Comment> Comments { get; set; } = new List<Comment>();
    
        public Post()
        {            
        }
        public Post(DateTime moment, string title, string content, int likes)
        {
            Moment = moment;
            Title = title;
            Content = content;
            Likes = likes;           
        }
        public void AddComment(Comment comment) 
        {
            Comments.Add(comment);
        }
        public void RemoveComment(Comment comment)
        {
            Comments.Remove(comment);
        }
        
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append(Title);
            sb.Append(Likes);
            sb.Append(" Likes - ");
            sb.AppendLine(Moment.ToString("dd/MM/yyyy HH:mm:ss"));
            sb.Append(Content);
            sb.AppendLine("Comments:");
            foreach(Comment comment in Comments) {
                sb.AppendLine(comment.Text);
            }
            return sb.ToString();
        }
    }
}