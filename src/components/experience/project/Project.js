import "./Project.scss";

import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

import keeprimg from "../../../images/projects/keepr.png";
import fbimg from "../../../images/projects/fb.png";
import chatappimg from "../../../images/projects/chatapp.png";

const Project = ({ project, index }) => {
  const { name, picture, about, liveLink, technologies, github } = project;

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1200px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const imgsrc = index === 0 ? keeprimg : index === 1 ? fbimg : chatappimg;

  return (
    <div
      className="Project"
      style={index === 2 ? { marginBottom: "110px" } : null}
    >
      {index % 2 !== 0 ? (
        <div>
          <Fade direction={index !== 1 ? "left" : null} delay={450} triggerOnce>
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="image-liveLink "
            >
              <img src={imgsrc} alt="Project"></img>
            </a>

            <div
              className="Project-info-container"
              style={
                matches
                  ? { background: "none" }
                  : { backgroundImage: `url(${imgsrc})`, color: "white" }
              }
            >
              <h4 style={{ alignSelf: "" }}>{name}</h4>
              <p style={{ textAlign: "" }}>{about[0].description}</p>
              <p style={{ textAlign: "" }}>{about[0].tech}</p>
              <div
                className="technologies-container"
                style={{ whiteSpace: "nowrap" }}
              >
                {technologies.map((technology, index) => {
                  return (
                    <span style={{ marginRight: "16px" }} key={index}>
                      {technology}
                    </span>
                  );
                })}
              </div>
              <div className="links-container" style={{ alignSelf: "" }}>
                {liveLink && (
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    <button className="link-button">Visit Site!</button>
                  </a>
                )}

                {github && (
                  <a href={github} target="_blank" rel="noreferrer">
                    <button
                      style={{ marginLeft: "10px" }}
                      className="link-button"
                    >
                      Github
                    </button>
                  </a>
                )}
              </div>
            </div>
          </Fade>
        </div>
      ) : (
        <div>
          <Fade direction="right" triggerOnce>
            <div
              className="Project-info-container"
              style={
                matches
                  ? { background: "none" }
                  : { backgroundImage: `url(${imgsrc})`, color: "white" }
              }
            >
              <h4>{name}</h4>
              <p>{about[0].description}</p>
              <p>{about[0].tech}</p>
              <div
                className="technologies-container"
                style={{
                  whiteSpace: "nowrap",
                  maxWidth: "600px",
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                {technologies.map((technology, index) => {
                  return (
                    <span style={{ marginRight: "16px" }} key={index}>
                      {technology}
                    </span>
                  );
                })}
              </div>
              <div className="links-container">
                {liveLink && (
                  <a href={liveLink} target="_blank" rel="noreferrer">
                    <button
                      style={{ marginRight: "10px" }}
                      className="link-button"
                    >
                      Visit Site!
                    </button>
                  </a>
                )}

                {github && (
                  <a href={github} target="_blank" rel="noreferrer">
                    <button className="link-button">Github</button>
                  </a>
                )}
              </div>
            </div>
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="image-liveLink"
            >
              <img src={imgsrc} alt="Project"></img>
            </a>
          </Fade>
        </div>
      )}
      {index !== 2 && <hr style={matches ? null : { display: "none" }}></hr>}
    </div>
  );
};

export default Project;
