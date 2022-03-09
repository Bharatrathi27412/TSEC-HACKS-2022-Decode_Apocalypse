import React from "react";
import "./profilecard.css";

function ProfileCard() {
  return (
    <div className="card1">
      <div className="top1">
        <h2 className="name1">Ashray Shetty</h2>
        <img
          className="circle-img1"
          src="https://pbs.twimg.com/profile_images/913095041526022144/lhg0O9_W_400x400.jpg"
          alt="avatar_img"
        />
      </div>
      <div className="bottom1">
        <p className="info1">Web Developer</p>
        <p className="info1">shettyvashray@gmail.com</p>
      </div>
    </div>
  );
}

export default ProfileCard;
