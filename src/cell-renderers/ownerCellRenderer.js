import React from "react";
import "../css/dashboard.css";

export default (props) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8%",
    }}
  >
    <img
      src={props.value.picture}
      height="30px"
      width="30px"
      style={{ "border-radius": "20px" }}
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "60px",
      }}
    >
      <div className="username">
        {props.value.firstName} {props.value.lastName}{" "}
      </div>
      <h5 className="username"> @{props.value.lastName} </h5>
    </div>
  </div>
);
