import React, { useState,useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getDatabase,ref,set } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext"
import "./proform.css";

function ProForm() {

  const { currentUser } = useAuth();
  
  const descriptionRef = useRef()

  async function writeData(e){
    e.preventDefault()
    const database = getDatabase();
    await set(ref(database, `proposts/${currentUser.uid}`), {
      desc: descriptionRef.current.value
    });
    console.log(descriptionRef.current.value)
  }


  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>New Post</h2>
        <form onSubmit={writeData}>
          
          <div className="description">
            <TextField
              id="outlined-basic"
              label="What do you want to talk about ?"
              name="description"
              variant="standard"
              multiline
              rows={7}
              inputRef={descriptionRef}
              required
            />
          </div>
          <div className="submit">
            <Button
              className="button"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProForm;
