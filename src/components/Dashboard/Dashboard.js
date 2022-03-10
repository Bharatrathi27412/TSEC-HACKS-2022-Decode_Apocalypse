import React, { useEffect, useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import ProfileCard from "../ProfileCard/ProfileCard.js";
import ProPost from "../ProPost/ProPost.js";
import TopBar from "../TopBar/TopBar.js";
import { getDatabase, ref, child, get } from "firebase/database"
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
//import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import "./dashboard.css";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  let finalData = {};
  const [newData, setNewData] = useState([]);
  // const [newUser, setNewUser] = useState([]);


  async function fireBaseFetch() {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `proposts/`)).then((snapshot) => {
      setNewData(snapshot.val())
      console.log(newData)
    }).catch((error) => {
      console.log(error);
    })
  }

  // async function fireBaseFetch() {
  //   const dbUserRef = ref(getDatabase());
  //   await get(child(dbUserRef, `users/`)).then((snapshot) => {
  //     setNewUser(snapshot.val())
  //     console.log(newUser)
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  useEffect(async () => {
    await fireBaseFetch()
    setTimeout(() => { }, 1000)
    // console.log("hel", newData)
  }, [])

  return (
    <div>
      <TopBar />
      <div className="row">
        <div className="profile">
          <ProfileCard />
          <Link to="/proform">
          <button className="newPost">New Post</button>
          </Link>
        </div>
        <div className="posts">
          {
            Object.keys(newData).map(function (val) {
              console.log(newData[val].desc)
              return (
                <ProPost
                  desc={newData[val].desc}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
