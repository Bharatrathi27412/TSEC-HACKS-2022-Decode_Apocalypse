import React, { useState } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications, Home } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <span className="topbarLink" style={{"color": "white"}}>Home</span>
        </Link>
        <Link to="/colab" style={{"color":"white"}}>
          <span className="topbarLink">Collaborate</span>
        </Link>
          {/* <span className="topbarLink">Messaging</span> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Notifications />
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
