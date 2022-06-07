import React from "react";
import "../css/dashboard.css";

export default (props) => (
  <div className="owner-container">
    <img className="owner-image" src={props.value.picture} />
    <div style={{ height: "60px" }}>
      <div className="username">
        {props.value.firstName} {props.value.lastName}{" "}
      </div>
      <h5 className="username"> @{props.value.lastName} </h5>
    </div>
  </div>
);
