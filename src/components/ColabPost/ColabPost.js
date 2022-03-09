import React, { useState } from "react";
import "./colabpost.css";

function ColabPost(props) {
    return (
    <div className="e-card">
      <div className="e-card-title">Ashray Shetty </div>
      <div className="e-card-content">
          <p>Project Name: {props.name}</p>
          <p>Domain: {props.domain}</p>
          <p>Preferred Tech Stack: {props.pts}</p>
          <p>Required Skill: {props.ts}</p>
          <p>Description: {props.desc}</p>
      </div>
    </div>
  );
}

export default ColabPost;
