import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
import { db, auth } from "./firebase";
import Profile from "./Profile";




function App() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        console.log(authUser);
        setUser(authUser);
      } else {
        //user logged out
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);

  // userEffect: run a piece of code based on a specific condition
  useEffect(
    () => {
      //this is where code runs
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          //every time a new post is added, it fires up onSnapshot
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              post: doc.data(),
            }))
          );
        });
    },
    [
      // this is condition
    ]
  );



  return (
    <div className="app">
           
      <div className="app_posts">
        <div className="app_postLeft">
        {posts.map(({ id, post }) => (
          <Post
            className="post"
            key={id}
            postId={id}
            user={user}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      <div className="app_profileRight">
        <Profile username={username}  />
      </div>
      </div>
     
    </div>
  );
}

export default App;
