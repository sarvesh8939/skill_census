import React, { useState,useContext } from "react";
import "../components/header.css";
import { AppContext } from "./AppContext";

function Header() {
  const { setSelectedValue } = useContext(AppContext);
  
  return (
    <div className="header">
      <div className="logo">
        <img src="src\assets\skill_icon-removebg.png" alt="logo" />
      </div>
      <div className="search_box">
        <label for="search">
          <img src="src\assets\search-alt.png" alt="search" />
        </label>
        <select
          id="category"
          name="search"
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="news about Artificial Intelligence, AI, robots">
            Artificial Intelligence
          </option>
          <option value="news about Bitcoin, cryptocurrency, blockchain">
            Bitcoin
          </option>
          <option value="news about Health, weight loss, fitness">
            Health
          </option>
        </select>
      </div>
      <div className="profile_icon">
        <img src="src\assets\user.png" alt="" />
      </div>
    </div>
  );
}

export default Header;
