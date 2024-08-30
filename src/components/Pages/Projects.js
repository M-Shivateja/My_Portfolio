import React from "react";
import "../Styles/Projects.css";

function Projects() {
  return (
    <div class="projects-wrapper">
      <div class="projects-grid mt-5 gx-5">
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
          <img
            src="https://shorturl.at/NojyF"
            alt="Project 2"
            rel="noopener noreferrer"
          />
          <h4>Personal Expense Tracker</h4>
          <p>This project is designed using MERN STACK.</p>
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
          <img
            src="http://surl.li/pgsqhk"
            alt="Project 3"
            rel="noopener noreferrer"
          />
          <h3>My Protfolio</h3>
          <p>this project is built using react.js and Css</p>
          <a href="https://github.com/M-Shivateja/SecureSignIn">View Project</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
