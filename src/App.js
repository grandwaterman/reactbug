import React, { useState, useEffect } from "react";
import "./App.css";
import { db, auth } from "./firebase";
import Profile from "./Profile";




function App() {
  const [username, setUsername] = useState("");
 
  return (
    <div className="app">
      <div className="app_posts">
      <div className="app_profileRight">
        <Profile username={username}  />
      </div>
      </div>
     
    </div>
  );
}

export default App;
