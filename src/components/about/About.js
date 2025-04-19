import "./About.scss";
import { Fade } from "react-awesome-reveal";
// front end logos
import HTML from "../../images/frontend/html.png";
import CSS from "../../images/frontend/css.png";
import Javascript from "../../images/frontend/javascript.png";
import React from "../../images/frontend/react.png";
import Redux from "../../images/frontend/redux.png";
import Tailwind from "../../images/frontend/tailwind.png";
import Typescript from "../../images/frontend/typescript.png";
// backend logos
import Node from "../../images/backend/node.png";
import Express from "../../images/backend/express.png";
import Mongo from "../../images/backend/mongo.png";
import MySQL from "../../images/backend/mysql.png";
import Firebase from "../../images/backend/firebase.png";
import PHP from "../../images/backend/php.png";
import LARAVEL from "../../images/backend/laravel.png";

const About = ({ refAbout }) => {
  return (
    <div className="About" ref={refAbout}>
      <div className="About-container">
        <Fade
          triggerOnce
          className="About-top-scroll"
          damping={0}
          direction="up"
          duration={900}
        >
          <div className="About-top">
            <h1>About me</h1>
            <p>
              Hi, I'm Anthony, a Full Stack Developer with over 3 years of
              experience building comprehensive web applications. I'm passionate
              about creating clean, efficient code that solves real-world
              problems across the entire development stack. I enjoy working with
              modern technologies and continuously expanding my skills to
              deliver polished, user-focused solutions.
            </p>
            <br></br>
            <p className="about-me-technologies-p">
              Here are some of the technologies i use
            </p>
          </div>
        </Fade>
        <div className="About-technologies">
          <div className="About-frontend">
            <Fade direction="left" delay={700} triggerOnce>
              <h3>Front End</h3>
            </Fade>
            <ul>
              <li>
                <img src={React} alt="React Logo"></img>
                <h4>React</h4>
              </li>
              <li>
                <img src={Typescript} alt="Typescript Logo"></img>
                <h4>Typescript</h4>
              </li>
              <li>
                <img src={Javascript} alt="Javascript Logo"></img>
                <h4>JavaScript</h4>
              </li>
              <li>
                <img src={HTML} alt="HTML Logo"></img>
                <h4>HTML</h4>
              </li>
              <li>
                <img src={CSS} alt="CSS Logo"></img>
                <h4>CSS</h4>
              </li>
              <li>
                <img src={Tailwind} alt="Tailwind Logo"></img>
                <h4>Tailwind</h4>
              </li>
            </ul>{" "}
          </div>
          <div className="About-backend">
            <Fade direction="right" delay={1000} triggerOnce>
              <h3>Back End</h3>
            </Fade>
            <ul style={{ alignSelf: "flex-end" }}>
              <li>
                <img src={Node} alt="Node Logo"></img>
                <h4>Node.js</h4>
              </li>
              <li>
                <img src={Express} alt="Express Logo"></img>
                <h4>Express</h4>
              </li>
              <li>
                <img src={PHP} alt="PHP Logo"></img>
                <h4>PHP</h4>
              </li>
              <li>
                <img src={LARAVEL} alt="Laravel Logo"></img>
                <h4>Laravel</h4>
              </li>
              <li>
                <img src={Mongo} alt="Mongo Logo"></img>
                <h4>MongoDB</h4>
              </li>
              <li>
                <img src={MySQL} alt="MySQL Logo"></img>
                <h4>MySQL</h4>
              </li>
              <li>
                <img src={Firebase} alt="Firebase Logo"></img>
                <h4>Firebase</h4>
              </li>
            </ul>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="about-background-text">About</div>
    </div>
  );
};

export default About;
