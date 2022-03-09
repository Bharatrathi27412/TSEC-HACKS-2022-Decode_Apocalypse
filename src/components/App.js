import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Githubfind from "./Githubfind"
// import Post from "./Post"
// import DevFind from "./DevFind"
import PostForm from "./PostForm/PostForm.js";
import ProForm from "./ProForm/ProForm.js";
import ColabPage from "./ColabPage/ColabPage.js";

function App() {
  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/git-result" component={Githubfind} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              {/* <Route path="/article" component={Post} /> */}
              {/* <Route path='dev-find' component={DevFind} /> */}
              <Route path="/postform" component={PostForm} />
              <Route path="/proform" component={ProForm} />
              <Route path="/colab" component={ColabPage} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    // </Container>
  )
}

export default App
