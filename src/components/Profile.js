import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import {Container, Button, Modal,Card} from "react-bootstrap"
import {useState, useRef} from "react";
import { useAuth } from '../contexts/AuthContext';
import { getDatabase, ref, child, get, set,push} from "firebase/database";
import Topbar from './TopBar/TopBar';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  


import "./profile.css"
import { useEffect } from 'react';


function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user,setUser] = useState({})

    const {currentUser}= useAuth();  

    const titleRef= useRef();
    const urlRef= useRef();
    const desRef= useRef();

    console.log(currentUser)

    const userId= currentUser.uid; 
    console.log(userId)   

    function addProject() {
        const db = getDatabase();
                  
                    // A post entry.
                    const postData = {
                        title: titleRef.current.value,
                        url: urlRef.current.value,
                     description: desRef.current.value

                    };


                    const updateUser = async (userId) => {
                        const userDoc = doc(db, "users", userId);
                        await updateDoc(userDoc, postData);
                      };
                    
                  
                  

    }

    useEffect(() => {
        const dbRef = ref(getDatabase());
            get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                console.log(snapshot.val())
                setUser(snapshot.val())
                // console.log(user)
                // console.log(user.username)
                // console.log(user_info)
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });

    
    }, [])
    

  
  return (
      <>
    <Topbar />
    <div className="body">
    <div className="container profile-section">
    
        <div className='user-detail'>
        <h4 className='mb-3 mt-4'>User Information</h4>

        <div className='mb-2'>
            <h5 className="mb-2 mt-4">Username:</h5>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={user.username} readOnly />
        </div>
        <div className='mb-2'>
            <h5 className="mb-2 mt-4">Email id:</h5>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={user.userEmail} readOnly />
        </div>
        <div className='mb-2'>
            <h5 className="mb-2 mt-4">Github Account: </h5>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={user.githubLink} readOnly />
        </div>

        <div className='mb-2'>
            <h5 className="mb-2 mt-4">Preferred Domain:</h5>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={user.domain} readOnly />
        </div>
        <div className='mb-2'>
            <h5 className="mb-2 mt-4">Add About Me: </h5>
            <textarea row="10" type="text" className="form-control" placeholder="About You" aria-label="Username" aria-describedby="basic-addon1"></textarea>
        </div>

        
        <Button variant="danger" className="mt-2" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
        <div className="form-floating mb-3">
            <label for="floatingInput">Project Title</label>
            <input type="text" class="form-control" id="floatingInput" placeholder="Project Name" ref={titleRef}/>
        </div>
        <div className="form-floating mb-3">
            <label for="floatingInput">Project URL</label>
            <input type="text" class="form-control" id="floatingInput" placeholder="URL.." ref={urlRef}/>
        </div>
        <div className="form-floating mb-3">
            <label for="floatingInput">Project Description</label>
            <textarea type="text" class="form-control" id="floatingInput" placeholder="Description" ref={desRef}></textarea>
        </div>
        </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProject}>   
            Save
          </Button>
        </Modal.Footer>
      </Modal>


        </div>
        <div className='projects mt-4'>

        <Card style={{ width: '25rem', border:"2px solid #000",boxSizing:"border-box", borderRadius:"10px"}}>
        <Card.Body>
            <Card.Title>Docket- Book Sharing website</Card.Title>
            <Card.Text>
            This is a platform where users from around the world will be able to upload any book so that other users can use it. This project currently only support books for Engineering, but others can be provided in the future.
            </Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}
        <Card.Body>
            <Card.Link href="https://github.com/shettyvashray/Docket-BookSharingWebsite">Github Link</Card.Link>
        </Card.Body>
        </Card>

        <br></br>

        <Card style={{ width: '25rem', border:"2px solid #000",boxSizing:"border-box", borderRadius:"10px"}}>
        <Card.Body>
            <Card.Title>Wally- Expense Tracker</Card.Title>
            <Card.Text>
            This is a JAVA based application, using mysql as a database. This app will help track your monthly spending with the help of charts.
            </Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup> */}
        <Card.Body>
            <Card.Link href="https://github.com/shettyvashray/Wally-ExpenseTracker">Github Link</Card.Link>
        </Card.Body>
        </Card>
        </div>
    </div>
    </div>

    </>
  )
}

export default Profile