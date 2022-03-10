import React, { useState } from "react";
import "./colabpost.css";
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Container} from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from "react";
import { getDatabase, ref, child, get, set,push} from "firebase/database";

// const cors= require("cors")

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.use("cors")



function ColabPost(props) {
  const {currentUser} = useAuth();
  const s_email= currentUser.email;
  console.log(s_email)
  // const [user,setUser] = useState({})


  // useEffect(() => {
  //   const dbRef = ref(getDatabase());
  //   get(child(dbRef, `users/${user_id}`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //       setUser(snapshot.val())
  //       console.log(user)
  //       // console.log(user.username)
  //       // console.log(user_info)
  //   } else {
  //       console.log("No data available");
  //   }
  //   }).catch((error) => {
  //   console.error(error);
  //   });


  
  // }, [])

  // console.log(user)
  // const s_email= user.userEmail;
  // console.log(s_email);
  
  const SendEmail = (r_id) =>{
      console.log("cnjjkz");
        const [user,setUser] = useState({})

      useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${r_id}`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        setUser(snapshot.val())
        console.log(user)
        // console.log(user.username)
        // console.log(user_info)
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });


  
  }, [])

  console.log(user)
  const r_email= user.userEmail;
  console.log(r_email);

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Origin','http://localhost:3000');


      const msg = {

        to: r_email, // Change to your recipient
        from: s_email, // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        mode: "cors",
        headers: headers,
        credentials: 'include',
        method: 'POST',


      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
  }
    return (
      <>
      <Container>
    <div className="e-card">
      <div className="e-card-title">Bharat Rathi </div>
      <div className="e-card-content">
          <p>Project Name: {props.name}</p>
          <p>Domain: {props.domain}</p>
          <p>Preferred Tech Stack: {props.pts}</p>
          <p>Required Skill: {props.rs}</p>
          <p>Description: {props.desc}</p>
      </div>
      <Button className="collaborate" variant="success" onClick={()=>{window.location.href="https://github.com/Bharatrathi27412"}}>Collaborate</Button>
    </div>
    </Container>
    </>

  );
}

export default ColabPost;
