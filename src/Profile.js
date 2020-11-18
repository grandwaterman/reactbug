import React, { useState } from 'react'
import './Profile.css'
import Avatar from "@material-ui/core/Avatar";
import { Button } from '@material-ui/core';
import firebase from "firebase";
import { storage, db } from "./firebase";

function Profile({username, email}) {
  const[avatarImage, setAvatarImage] = useState('')

  const handleChangeAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatarImage(e.target.files[0]);
      console.log(e.target.files)
    //   const uploadAvatarImage = storage.ref(`avatars/${avatarImage.name}`).put(avatarImage);
    // uploadAvatarImage.on(
    //     () => {
    //     //complete function
    //     storage
    //       .ref("avatars")
    //       .child(avatarImage.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         //post image inside db
    //         db.collection("posts").add({
    //           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //           photoURL: url,
             
    //         });
    //         setAvatarImage(null);
    //       });
    //   }
    // );
    }
  };

  // const uploadAvatar = ()=>{

  //   const uploadAvatarImage = storage.ref(`avatars/${avatarImage.name}`).put(avatarImage);
  //   uploadAvatarImage.on(
  //       () => {
  //       //complete function
  //       storage
  //         .ref("avatars")
  //         .child(avatarImage.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           //post image inside db
  //           db.collection("posts").add({
  //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //             photoURL: url,
             
  //           });
  //           setAvatarImage(null);
  //         });
  //     }
  //   );
  // } 
   
     return (
        <div className="Profile">
           
           <h3>USER AVATAR</h3> 
           <br></br>
            <div className="profile_avatar">
              <Button 
              component="label"
              // onClick={uploadAvatar}
              >
                <Avatar /> 
                <input 
                type="file"  
                style={{ display: "none" }} 
                onChange={handleChangeAvatar} />
              </Button>
            </div> 

         
            
          
        </div>
    )
}

export default Profile
