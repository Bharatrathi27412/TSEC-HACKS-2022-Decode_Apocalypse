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
              <PrivateRoute exact path="/profile" component={Profile} />

              <PrivateRoute exact path="/git-result" component={Githubfind} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/forgot-password" component={ForgotPassword} />
              {/* <PrivateRoexact ute path="/article" component={Post} /> */}
              {/* <PrivateRoexact ute path='dev-find' component={DevFind} /> */}
              <PrivateRoute exact path="/postform" component={PostForm} />
              <PrivateRoute exact path="/proform" component={ProForm} />
              <PrivateRoute exact path="/colab" component={ColabPage} />
            </Switch>
          </AuthProvider>
        </Router>
      // </div>
  )
  module.exports = finalData
}

export default App
