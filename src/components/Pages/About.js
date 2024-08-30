import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <div class="info">
      <div class="about">
        <h1>About Me</h1>
        <p>
          Hi, I’m Shiva Teja, a MERN Stack Developer with a B.Tech degree. I’m
          passionate about building creative and effective web applications that
          make an impact. I specialize in the MERN stack—MongoDB, Express.js,
          React.js, and Node.js which helps me create complete applications from
          scratch. I love designing and developing user-friendly, responsive
          interfaces that look great and work well. I’m eager to keep learning
          and adapting to new technologies and methods.
          <p>
            Feel free to check out my portfolio and get in touch if you want to
            collaborate or just chat about web development!
          </p>
        </p>
      </div>

      <div class="row" id="mycol">
        <div class="col card" id="edu">
          <h1>Education Qualification</h1>
          <ul class="list-unstyled">
            <li>
              Graduated from
              <span> Amrita School of Engineering</span>
            </li>
            <li>CGPA 7.51</li>
            <li>B.Tech</li>
          </ul>
        </div>
        <div class="col card" id="skills">
          <h1>Skills</h1>
          <div class="row">
            <div class="col">
              <img
                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
                alt="dblogo"
              />
            </div>
            <div class="col">
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
                alt="reactlogo"
              />
            </div>
            <div class="col">
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"
                alt="node"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img
                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                alt="html"
              />
            </div>
            <div class="col">
              <img
                src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                alt="css"
              />
            </div>
            <div class="col">
              <img
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt="express"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
