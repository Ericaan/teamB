import React, {useState, useEffect} from "react";
import Axios from "axios";
import './styles.css'


function Author() {
  let apiUrl = "https://backend-stu4-app.herokuapp.com/authors/";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [authorList, setItems] = useState([]);

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [_id, setId] = useState('')
  const [isSent, setIsSent] = useState(false)

  const [readPostId, writePostId] = useState("");
  //delete authors
  const deleteAuthor = async () => {
    try {
      await Axios.delete(`${apiUrl}/${readPostId}`);
      console.log("Author is successfully deleted");
    } catch (err){
      console.log("Author deletion failed");
    }
  };
  
  //adding authors 
    const submit = () => {
      console.log(firstName,lastName);
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName }),
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
    } 
      return (
        <section>
          <aside>
            <h3>Author List</h3>
            <ul>
              {authorList.map(authors => (
                <div className="list">
                  Author ID: {authors._id}
                  <p>Name: {authors.firstName} {authors.lastName}</p>
                  <hr className="rounded"></hr>
                  </div>
                ))}
            </ul>
          </aside>
          
          <article>
            <h3>Create Author</h3>
            <form onSubmit={submit}>
              <label>First Name:</label>
              <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/><br/>
              <label>Last Name:</label>
              <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/><br/>
              <input type="submit" name="Submit" />
            </form><br></br>

            <h3>Delete Author</h3>
            <form onSubmit={deleteAuthor}>
              <label>Author ID: </label>
              <input type="text" name="_id" value={readPostId} onChange={e => writePostId(e.target.value)}/><br/>
              <input type="submit" name="Delete" value="Delete"/>
            </form>
          </article>
      </section>
      );
    
}
export default Author;