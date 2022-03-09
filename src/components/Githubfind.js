import React,{ useRef, useState } from 'react'
import { getDatabase,ref,child,get } from "firebase/database"
import { useAuth } from "../contexts/AuthContext"

function Githubfind() {

    const nameRef = useRef();
    const { currentUser } = useAuth();
    var finalData = {};
    var d = {}

    async function fireBaseFetch() {
        const dbRef = ref(getDatabase());
        await get(child(dbRef, `users/${currentUser.uid}`)).then((snapshot) => {
            if(snapshot.exists()) {
                finalData = snapshot.val();
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
        console.log(finalData.likes[1])

        await fetch(`https://api.github.com/search/repositories?q=stars:>=500+language:${finalData.likes[1]}+in:${finalData.likes[0]}&sort=stars&order=desc`)
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
        console.log(d);
    }

  return (
    <div>
        <input type='text' ref={nameRef} />
        <button onClick={(e) => handleSubmit(e)}>Click Me</button>
    </div>
  )
}

export default Githubfind