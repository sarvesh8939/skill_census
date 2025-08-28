import React, { useState,useContext } from "react";
import "../components/header.css";
import { AppContext } from "./AppContext";
import logo from '../assets/skill_icon-removebg.png'
import searchIcon from '../assets/search-alt.png'
import userIcon from '../assets/user.png'

function Header() {
  const { setSelectedValue } = useContext(AppContext);
  
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search_box">
        <label for="search">
          <img src={searchIcon} alt="search" />
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
        <img src={userIcon} alt="" />
      </div>
    </div>
  );
}

export default Header;
