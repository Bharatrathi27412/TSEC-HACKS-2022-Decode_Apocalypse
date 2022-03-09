import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import ProfileCard from "../ProfileCard/ProfileCard.js";
import ProPost from "../ProPost/ProPost.js";
import TopBar from "../TopBar/TopBar.js";
import "./dashboard.css";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div>
      <TopBar />
      <div className="row">
        <div className="profile">
          <ProfileCard />
        </div>
        <div className="posts">
          <ProPost />
          <ProPost />
          <ProPost />
        </div>
      </div>
    </div>
  )
}
