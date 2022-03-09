import React, { useEffect, useState } from "react";
import ColabPost from "../ColabPost/ColabPost.js";
import TopBar from "../TopBar/TopBar.js";
import "./colabpage.css";
import { useAuth } from "../../contexts/AuthContext"
import { getDatabase,ref,child,get } from "firebase/database"


function ColabPage(props) {
  const { currentUser } = useAuth();
  let finalData = {};
  const [newData,setNewData] = useState([]);

  async function fireBaseFetch() {
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `posts/`)).then((snapshot) => {
        setNewData(snapshot.val())
        console.log(newData)
    }).catch((error) => {
        console.log(error);
    })
}

  useEffect(async() => {
    await fireBaseFetch()
    setTimeout(() => {} ,1000)
    // console.log("hel", newData)
  },[])

  console.log("hel", newData.desc)

   return (
    <div>
      <TopBar />
      <div className="row">
        {
          Object.keys(newData).map(function(val){
            console.log(newData[val].domain)
            return (
              <ColabPost
              name={newData[val].projectName}
              domain={newData[val].domain}
              pts = {newData[val].techStack}
              rs = {newData[val].requiredSkill}
              desc = {newData[val].desc}
              />
            )
          })
        }
      </div>
    </div>
   )
}

export default ColabPage;
