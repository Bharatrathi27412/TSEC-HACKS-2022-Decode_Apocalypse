import React,{ useRef, useState } from 'react'
import { getDatabase,ref,child,get } from "firebase/database"
import { useAuth } from "../contexts/AuthContext"
import Topbar from './TopBar/TopBar';
import { Card } from "react-bootstrap"



const Project= ()=>{
    return (
    <Card style={{ width: '22rem' }}>
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
    </Card.Body>
    </Card>
    );

}

function Githubfind() {

    const [data,setData] = useState([])
    const nameRef = useRef();
    const { currentUser } = useAuth();
    var finalData = {};
    var d = {}

    async function fireBaseFetch() {
        const dbRef = ref(getDatabase());
        await get(child(dbRef, `posts/`)).then((snapshot) => {
            if(snapshot.exists()) {
                finalData = snapshot.val();
                console.log(finalData)
            }else {
                console.log("No data");
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    async function handleSubmit(e) {
        console.log("hi")
        e.preventDefault();
        const userName = nameRef.current.value
        console.log(userName);
        await fireBaseFetch();
        // console.log(finalData.likes[1])

        await fetch(`https://api.github.com/search/repositories?q=stars:>=500+language:python+in:java&sort=stars&order=desc`)
        .then(res => res.json())
        .then((da) => {
            console.log(da);
            // for(let i=0;i<=10;i++){
            //     var newData = {
            //         "clone_url" : da.items[i].clone_url,
            //         "description" : da.items[i].description,
            //         "name" : da.items[i].name
            //     }
            //     setD([...d, newData])
            // }
            d = da.items.slice(0,10)
        })
        // console.log(d);
        setData(d);
        console.log(data)
    }

  return (
      <>
      <Topbar/>
    <div style={{display: "flex",justifyContent:"center",alignItems:"center"}} className="mt-4">
        <input type='text' ref={nameRef} />
        <button onClick={(e) => handleSubmit(e)}>Search</button>
        {/* {
            d.map((val)=>{
                console.log(val)
                return (
                    <Project 
                    
                   // clone_url={val.items[i].clone_url}
                    //description = {val.items[i].description}
                    //name= {val.items[i].name}

                    />
                );

            })
        } */}
    </div>

    </>

  )
}

export default Githubfind