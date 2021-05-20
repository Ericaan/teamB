import React, {useState, useEffect} from "react";
import Axios from "axios";
import './styles.css'

function Post() {
  let apiUrl = "https://backend-stu4-app.herokuapp.com/posts";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setItems] = useState([]);

  const [isSent, setIsSent] = useState(false);
  const [readPostId, writePostId] = useState("");

  const [title, setTitle] = useState('');
  const [published, setPublished] = useState('');
  const [authors, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [comments, setComment] = useState('');
  const [permalink, setPermalink] = useState('');

  //delete posts
  const deletePost = async () => {
    try {
      await Axios.delete(`${apiUrl}/${readPostId}`);
      console.log("Author is successfully deleted");
    } catch (err){
      console.log("Author deletion failed");
    }
  };
  
  //adding posts 
    const submit = () => {
      console.log(title, published, authors, content, comments, permalink);
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ title, published, authors, content, comments, permalink }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json()) 
      .then(json => console.log(json));
    }
  
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(apiUrl)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // error message
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section>
          <aside>
            <h3>Post List</h3><br></br>
            {postList.map(posts => (
              <div>
                <h5>Post ID: {posts._id}</h5>
                <h5>Title: {posts.title}</h5>
                <p>Published: {posts.published}</p>
                <p>The Author: {posts.authors}</p>
                <p>Content: {posts.content}</p>
                <p>Comment: {posts.comments}</p>
                <p>Permalink: {posts.permalink}</p>
                <hr className="rounded"></hr>
            </div>
            ))}
          </aside>

          <article>
            <h3>Post Content</h3>
            <form onSubmit={submit}>
              <label>Title: </label>
              <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}></input><br></br>
              <label>Published: </label>
              <input type="text" id="published" name="published" value={published} onChange={e => setPublished(e.target.value)}></input><br></br>
              <label>Author: </label>
              <input type="text" id="author" name="author" value={authors} onChange={e => setAuthor(e.target.value)}></input><br></br>
              <label>Content: </label>
              <input type="textarea" id="content" name="content" value={content} onChange={e => setContent(e.target.value)}></input><br></br>
              <label>Comment: </label>
              <input type="textarea" id="comment" name="comment" value={comments} onChange={e => setComment(e.target.value)}></input><br></br>
              <label>Permalink: </label>
              <input type="text" id="permalink" name="permalink" value={permalink} onChange={e => setPermalink(e.target.value)}></input><br></br>
              <input type="submit" value="Submit"></input>
            </form>
            <br></br>
            <h3>Delete Post</h3>
            <form onSubmit={deletePost}>
              <label>Post ID: </label>
              <input type="text" name="_id" value={readPostId} onChange={e => writePostId(e.target.value)}/><br/>
              <input type="submit" name="Delete" value="Delete"/>
            </form>
          </article>
        </section>
      );
    }
}
export default Post;