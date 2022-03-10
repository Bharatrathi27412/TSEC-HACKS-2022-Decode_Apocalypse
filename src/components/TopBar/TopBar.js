import React, { useState } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications, Home } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
// import "../../assets/myimg.jpeg";

function Topbar() {

  const { logout } = useAuth()

  function handleLogout(){
    try{
      logout()
    } catch {
      console.log("error")
    }
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">DevCupid</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for dev partner or post"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Collaborate</span>
          {/* <span className="topbarLink">Messaging</span> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
            <Button variant="primary" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnozsb1QEhjyjE7p-bGl9hQOkJh0brsUKoA&usqp=CAU"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
}

export default Topbar;
