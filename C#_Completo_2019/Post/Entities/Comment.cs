namespace Post.Entities
{
    public class Comment
    {
        public string Text { get; set; }
            
        public Comment()
        {        
        }

        public Comment(string text)
        {
            Text = text;
        }
    }
}