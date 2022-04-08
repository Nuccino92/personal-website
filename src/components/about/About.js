import "./About.scss";
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

const About = () => {
  return (
    <div className="About">
      <div className="About-container">
        <div className="About-top">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, duis consul ut ius, harum epicuri quo
            eu. Eu sit aperiri consetetur incorrupte. Ei dicat aliquid
            neglegentur usu, bonorum philosophia at nam. In malorum indoctum.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, duis consul ut ius, harum epicuri quo
            eu. Eu sit aperiri consetetur incorrupte. Ei dicat aliquid
            neglegentur usu, bonorum philosophia at nam. In malorum indoctum.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, duis consul ut ius, harum epicuri quo
            eu. Eu sit aperiri consetetur incorrupte.
          </p>
          <br></br>
          <p style={{ fontWeight: "bold" }}>
            Here are some of the technologies i use
          </p>
        </div>
        <div className="About-technologies">
          <div className="About-frontend">
            <h3>Front End</h3>
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
                <h4>Javascript</h4>
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
                <h4>SASS</h4>
              </li>
            </ul>
          </div>
          <div className="About-backend">
            <h3>Back End</h3>
            <ul style={{ alignSelf: "flex-end" }}>
              <li>
                <img src={Node} alt="Node Logo"></img>
                <h4>NodeJS</h4>
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
    </div>
  );
};

export default About;
