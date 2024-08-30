import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Mainpage.css";
import mypic from "./imageme2.jpg";

function Main() {
  return (
    <div class="myhome">
      <div class="intro">
        <div class="pic">
          <img src={mypic} alt="mypicture" rel="noopener noreferrer" />
        </div>

        <div class="content">
          <span>Hi, I'm Shiva Teja,</span>
          <p>
            a <b>MERN Stack Developer</b>.I build full-stack web applications
            <br />
            using MongoDB, Express.js, React.js, and Node.js.
          </p>
        </div>
      </div>
      <div class="blink-container">
        <div className="blink-text">Available for work</div>
      </div>
      <div class="card-body">
        <Link
          to="https://github.com/M-Shivateja"
          target="_blank"
          className="btn btn-outline-light mx-1 mybtn"
        >
          <i className="bi bi-github"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/shiva-teja-m-80b616239/"
          target="_blank"
          className="btn btn-outline-light mx-1 mybtn"
          id="lnkdn"
        >
          <i className="bi bi-linkedin"></i>
        </Link>
        <Link
          to="https://drive.google.com/file/d/1idBxfCfe7HICXzAELECoLtKsUxgu1Eux/view?usp=sharing"
          target="_blank"
          className="btn btn-outline-light mx-1 mybtn"
        >
          <i class="bi bi-file-earmark-arrow-down-fill"></i>
        </Link>
      </div>

      <div class="projects-wrapper">
        <div class="headings  mt-6 mb-1 p-5 text-center text-light">
          <h2>My Projects</h2>
        </div>
        <div class="projects-grid">
          <div class="project-card">
            <img src="https://shorturl.at/FMZRw" alt="Project 1" />
            <h3>BookStore Application</h3>
            <p>A Ecommerce website developed using MERN STACK</p>
            <a
              href="https://github.com/M-Shivateja/BookStore"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div class="project-card">
            <img src="https://shorturl.at/NojyF" alt="Project 2" />
            <h4> Personal Expense Tracker</h4>
            <p>This project is designed with MERN STACK.</p>
            <a
              href="https://github.com/M-Shivateja/PersonalExpense_Tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div class="project-card">
            <img src="https://shorturl.at/s3sCE" alt="Project 3" />
            <h3>SecureSignIn</h3>
            <p>SecureSignIn/Login application with MERN stack.</p>
            <a
              href="https://github.com/M-Shivateja/SecureSignIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
          <div class="project-card">
            <img src="http://surl.li/pgsqhk" alt="Project 4" />
            <h3>My Protfolio</h3>
            <p>this project is built using react.js and Css</p>
            <a
              href="https://github.com/M-Shivateja/SecureSignIn"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
