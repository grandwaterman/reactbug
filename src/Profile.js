import React, { useState } from 'react'
import './Profile.css'
import Avatar from "@material-ui/core/Avatar";
import { Button } from '@material-ui/core';
import firebase from "firebase";
import { storage, db } from "./firebase";

function Profile({username, email, imageUrl, avatarUrl}) {
    const [avatar, setAvatar] = useState(null);
   

    const handleChange = (e) => {
      if (e.target.files[0]) {
        setAvatar(e.target.files[0]);
        }
    };
    const handleUploadAvatar = () => {
          const uploadTask = storage.ref(`avatars/${avatar.name}`).put(avatar);
          uploadTask.on(
            "state_changed",
             () => {
              //complete function
              storage
                .ref("avatars")
                .child(avatar.name)
                .getDownloadURL()
                .then((url) => {
                  //post image inside db
                  db.collection("avatars").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    avatarUrl: url,
                    email: email,
                  });
                  setAvatar(null);
                });
            }
          );
          };
    


    return (
        <div className="Profile">
           
           <h3>USER PROFILE</h3> 
           <br></br>
            <div className="profile_avatar">
            
            <div> <Avatar className="post_avatar" src={avatarUrl}  alt="" /></div>
                <div className="avatarButton">
                {/* <input
                        type="file"
                        onChange={handleChange} 
                    /> */}
                <Button
                variant="contained"
                color="default"
                size="small"
                component="label"
                onClick={handleUploadAvatar}
                >
                Update Avatar
                    <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleChange} 
                    />
                </Button>
                </div>
            </div> 
             
          
          
        </div>
    )
}

export default Profile
