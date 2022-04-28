import "./Project.scss";

import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

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

  return (
    <div
      className="Project"
      style={index === 2 ? { marginBottom: "110px" } : null}
    >
      {index % 2 !== 0 ? (
        <div>
          <Fade direction={index !== 2 ? "left" : null} delay={450} triggerOnce>
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="image-liveLink "
            >
              <img src={picture} alt="Project"></img>
            </a>

            <div
              className="Project-info-container"
              style={
                matches
                  ? { background: "none" }
                  : { backgroundImage: `url(${picture})`, color: "white" }
              }
            >
              <h4 style={{ alignSelf: "flex-end" }}>{name}</h4>
              <p style={{ textAlign: "end" }}>{about[0].description}</p>
              <p style={{ textAlign: "end" }}>{about[0].tech}</p>
              <div
                className="technologies-container"
                style={{ alignSelf: "flex-end" }}
              >
                {technologies.map((technology, index) => {
                  return (
                    <span style={{ marginLeft: "16px" }} key={index}>
                      {technology}
                    </span>
                  );
                })}
              </div>
              <div
                className="links-container"
                style={{ alignSelf: "flex-end" }}
              >
                <a href={liveLink} target="_blank" rel="noreferrer">
                  <button className="link-button">Visit Site!</button>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <button
                    style={{ marginLeft: "10px" }}
                    className="link-button"
                  >
                    Github
                  </button>
                </a>
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
                  : { backgroundImage: `url(${picture})`, color: "white" }
              }
            >
              <h4>{name}</h4>
              <p>{about[0].description}</p>
              <p>{about[0].tech}</p>
              <div className="technologies-container">
                {technologies.map((technology, index) => {
                  return (
                    <span style={{ marginRight: "16px" }} key={index}>
                      {technology}
                    </span>
                  );
                })}
              </div>
              <div className="links-container">
                <a href={liveLink} target="_blank" rel="noreferrer">
                  <button
                    style={{ marginRight: "10px" }}
                    className="link-button"
                  >
                    Visit Site!
                  </button>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <button className="link-button">Github</button>
                </a>
              </div>
            </div>
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="image-liveLink"
            >
              <img src={picture} alt="Project"></img>
            </a>
          </Fade>
        </div>
      )}
      {index !== 2 && <hr style={matches ? null : { display: "none" }}></hr>}
    </div>
  );
};

export default Project;
