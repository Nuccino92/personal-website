import "./ExtraProject.scss";
import GitHubLogo from "../../../images/logos/github.png";
import { GoLinkExternal } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const ExtraProject = ({ project, index }) => {
  const { name, description, picture, liveLink, github, technologies } =
    project;

  // react awsome fade delay
  const number = index * 150;

  return (
    <Fade delay={number} direction={index >= 3 ? "up" : "down"} triggerOnce>
      <div className="ExtraProject">
        <a href={liveLink} target="_blank" rel="noreferrer">
          <main>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="extra-technologies-container">{technologies}</div>
            <div className="extra-links-container">
              <a href={github} target="_blank" rel="noreferrer">
                <img
                  src={GitHubLogo}
                  alt="GitHub"
                  target="_blank"
                  rel="noreferrer"
                />
              </a>
              <a href={liveLink} target="_blank" rel="noreferrer">
                <GoLinkExternal size={25} color={"white"} />
              </a>
            </div>
          </main>
          <img
            className="extra-project-background"
            src={picture}
            alt="Project"
          />
        </a>
      </div>
    </Fade>
  );
};

export default ExtraProject;
