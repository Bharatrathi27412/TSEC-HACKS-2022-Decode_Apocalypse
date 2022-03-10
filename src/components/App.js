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
import Profile from "./Profile"
import Githubfind from "./Githubfind"
// import Post from "./Post"
// import DevFind from "./DevFind"
import PostForm from "./PostForm/PostForm.js";
import ProForm from "./ProForm/ProForm.js";
import ColabPage from "./ColabPage/ColabPage.js";
import { useAuth } from "../contexts/AuthContext"
import { getDatabase,ref,child,get } from "firebase/database"

function App() {

  var finalData = {};

  async function fireBaseFetch() {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `posts/`)).then((snapshot) => {
        if(snapshot.exists()) {
            finalData = snapshot.val();
            // console.log(finalData)
        }else {
            console.log("No data");
        }
    }).catch((error) => {
        console.log(error);
    })
}

  finalData = fireBaseFetch()
  

  return (
    // <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    // >
      // <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/profile" component={Profile} />

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
      // </div>
  )
  module.exports = finalData
}

export default App
