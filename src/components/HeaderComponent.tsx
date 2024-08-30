import React, { useState } from "react";
import "../HeaderComponent.css";
import Forms from "./Forms";

const HeaderComponent = () => {
  return (
    <div className="container">
      <div className="profile-img">
        <img src="src\assets\images\goals.jpg" alt="Profile Image" />
      </div>
      <h1 className="TopFont">Your Goals Here</h1>
      <Forms />
    </div>
  );
};

export default HeaderComponent;
