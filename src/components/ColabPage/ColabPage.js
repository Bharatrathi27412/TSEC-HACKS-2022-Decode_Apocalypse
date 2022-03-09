import React, { useState } from "react";
import ColabPost from "../ColabPost/ColabPost.js";
import TopBar from "../TopBar/TopBar.js";
import "./colabpage.css";

function ColabPage() {
  return (
    <div>
      <TopBar />
      <div className="row">
        <ColabPost/>
        <ColabPost/>
        <ColabPost/> 
      </div>
    </div>
  );
}

export default ColabPage;
