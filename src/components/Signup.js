import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./signup.css"
import "bootstrap/dist/css/bootstrap.min.css"




export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const githubRef = useRef()
  const stackRef = useRef()
  const domainRef = useRef()
  const userRef = useRef()

  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value, githubRef.current.value, domainRef.current.value, stackRef.current.value, userRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="signup-body">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>

            <form onSubmit={handleSubmit}>
              <h3 className="mb-4 reg-title">REGISTER</h3>
              {error && <Alert variant="danger">{error}</Alert>}


              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" ref={userRef} />
              </div>

              {/* <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>  */}

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" ref={emailRef} />
              </div>

              <div className="form-group">
                <label>Github Link</label>
                <input type="text" className="form-control" placeholder="Enter Github Link" ref={githubRef} />
              </div>

              <div className="form-group">
                <label>Preferred Domain</label>
                <input type="text" className="form-control" placeholder="Web, App, ..." ref={domainRef} />
              </div>

              <div className="form-group">
                <label>Preferred Tech Stack/ Language</label>
                <input type="text" className="form-control" placeholder="Mern, Full Stack, Python..." ref={stackRef} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" ref={passwordRef} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" ref={passwordConfirmRef} />
              </div>


              <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
              <p className="forgot-password text-left mt-2">
                Already registered? <Link to="/login" style={{color:"black", fontWeight:"bold"}}>Log In</Link>
              </p>
            </form>
          </div>
        </Container>
      </div>
    </>
  )
}

