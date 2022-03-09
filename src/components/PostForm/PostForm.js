import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./postform.css";

function PostForm() {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Collaborate</h2>
        <form>
          <div className="projectName">
            <TextField
              id="outlined-basic"
              label="Project Name"
              name="projectName"
              variant="standard"
              required
            />
          </div>
          <div className="domain">
            <TextField
              id="outlined-basic"
              label="Domain"
              name="domain"
              variant="standard"
              required
            />
          </div>
          <div className="ts">
            <TextField
              id="outlined-basic"
              label="Preferred Tech Stack"
              name="ts"
              variant="standard"
              required
            />
          </div>
          <div className="rs">
            <TextField
              id="outlined-basic"
              label="Required Skill"
              name="rs"
              variant="standard"
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

export default PostForm;
