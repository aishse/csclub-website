import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-static-top navbar-expand-lg navbar-light fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./logoOrg.png" class="img-fluid float-left " alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Our Partners
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
