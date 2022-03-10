import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./login.css"
import "bootstrap/dist/css/bootstrap.min.css"




export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="login-body">
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>


            <form onSubmit={handleSubmit}>

              <h4 className="mb-4" style={{"font-weight":'bold'}}>LOG IN</h4>
              {error && <Alert variant="danger">{error}</Alert>}

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" ref={emailRef} />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" ref={passwordRef} />
              </div>


              <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
              <div className="d-flex justify-content-between mt-2">
                <span className="forgot-password text-right " style={{color:"black", fontWeight:"bold"}}>
                  Forgot <a href="#" style={{color:"black", fontWeight:"bold"}}>password?</a>
                </span>

                <span classNameName="">
                  Need an account? <Link to="/signup" style={{color:"black", fontWeight:"bold"}}>Sign Up</Link>
                </span>
              </div>

            </form>
          </div>
        </Container>
      </div>
    </>
  )
}

