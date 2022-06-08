import React from "react";
import "../css/dashboard.css";

export default (props) => (
  <div className="owner-container">
    <img className="owner-image" src={props.data.picture} />
    <div style={{ height: "60px" }}>
      <div className="username">
        {props.data.firstName} {props.data.lastName}{" "}
      </div>
      <h5 className="username"> @{props.data.lastName} </h5>
    </div>
  </div>
);
