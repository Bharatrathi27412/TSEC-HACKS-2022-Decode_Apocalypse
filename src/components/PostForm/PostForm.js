import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext"
import TopBar from "../TopBar/TopBar.js";
import "./postform.css";

function PostForm() {

  const { currentUser } = useAuth();

  const projectNameRef = useRef()
  const domainRef = useRef();
  const tsRef = useRef();
  const rsRef = useRef();
  const descriptionRef = useRef()

  async function writeData(e) {
    e.preventDefault()
    const database = getDatabase();
    await set(ref(database, `posts/${currentUser.uid}`), {
      projectName: projectNameRef.current.value,
      domain: domainRef.current.value,
      techStack: tsRef.current.value,
      requiredSkill: rsRef.current.value,
      desc: descriptionRef.current.value
    });
    console.log(projectNameRef.current.value, domainRef.current.value)
  }


  return (
    <div>
    <TopBar />
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Collaborate</h2>
          <form onSubmit={writeData}>
            <div className="projectName">
              <TextField
                id="outlined-basic"
                label="Project Name"
                name="projectName"
                variant="standard"
                inputRef={projectNameRef}
                required
              />
            </div>
            <div className="domain">
              <TextField
                id="outlined-basic"
                label="Domain"
                name="domain"
                variant="standard"
                inputRef={domainRef}
                required
              />
            </div>
            <div className="ts">
              <TextField
                id="outlined-basic"
                label="Preferred Tech Stack"
                name="ts"
                variant="standard"
                inputRef={tsRef}
                required
              />
            </div>
            <div className="rs">
              <TextField
                id="outlined-basic"
                label="Required Partner Skill"
                name="rs"
                variant="standard"
                inputRef={rsRef}
                required
              />
            </div>
            <div className="description">
              <TextField
                id="outlined-basic"
                label="Description"
                name="description"
                variant="standard"
                multiline
                rows={3}
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
    </div>
  );
}

export default PostForm;
