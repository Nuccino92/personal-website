import "./About.scss";
import { Fade } from "react-awesome-reveal";
// front end logos
import HTML from "../../images/frontend/html.png";
import CSS from "../../images/frontend/css.png";
import Javascript from "../../images/frontend/javascript.png";
import React from "../../images/frontend/react.png";
import Redux from "../../images/frontend/redux.png";
import SASS from "../../images/frontend/sass.png";
// backend logos
import Node from "../../images/backend/node.png";
import Express from "../../images/backend/express.png";
import Mongo from "../../images/backend/mongo.png";
import MySQL from "../../images/backend/mysql.png";
import Firebase from "../../images/backend/firebase.png";

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
              Hi,&#160; I'm Anthony,&#160; a Full Stack Developer who luckily
              found and fell in love with programming in the pursuit of
              bettering myself.
            </p>
            <br></br>
            <p>
              I consider myself a naturally curious person who enjoys learning
              about and acquiring new skills, which is what makes development so
              much fun.
            </p>
            <br></br>
            <p>
              I've found equal enjoyment when working from the front or back
              end, whether it'd be creating an API or UI as long as I am able to
              improve and build upon myself that is where I find true
              excitement.
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
                <img src={HTML} alt="HTML Logo"></img>
                <h4>HTML</h4>
              </li>
              <li>
                <img src={CSS} alt="CSS Logo"></img>
                <h4>CSS</h4>
              </li>
              <li>
                <img src={Javascript} alt="Javascript Logo"></img>
                <h4>JavaScript</h4>
              </li>
              <li>
                <img src={React} alt="React Logo"></img>
                <h4>React</h4>
              </li>
              <li>
                <img src={Redux} alt="Redux Logo"></img>
                <h4>Redux</h4>
              </li>
              <li>
                <img src={SASS} alt="SASS Logo"></img>
                <h4>Sass</h4>
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
