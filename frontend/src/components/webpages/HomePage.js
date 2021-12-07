import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="container">
      <h1 className="hook">CUT OUT THE BS</h1>
      <div className="row">
        <div className="col">
          <div className="text">
            <h1 className="header">
              a simple to-do list designed to put you at ease
            </h1>
            <Link to="/mytodolist">
              <button className="start-button">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img
              src="images/img-2.jpg"
              alt="To-do list clipart"
              className="home-image"
              align="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
