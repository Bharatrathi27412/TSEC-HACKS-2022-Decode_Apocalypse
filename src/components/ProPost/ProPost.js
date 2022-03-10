import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "./propost.css";


function ProPost(props) {
  return (<div className="e-card">
        <div className="e-card-image">
          <div className="e-card-title">Bharat Rathi </div>
        </div>
        <div className="e-card-content">
          {props.desc} </div>
      </div>);
}

export default ProPost;
