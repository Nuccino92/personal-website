import "./Project.scss";

const Project = ({ project, index }) => {
  const { name, picture, about, liveLink, technologies, github } = project;

  return (
    <div className="Project">
      {index % 2 === 0 ? (
        <div>
          <a href={liveLink} target="blank" className="image-liveLink">
            <div>
              <button>Check it out</button>
            </div>
            <img src={picture} alt="Project"></img>
          </a>
          <div className="Project-info-container">
            <h4 style={{ alignSelf: "flex-end" }}>{name}</h4>
            <p>{about}</p>
            <div
              className="technologies-container"
              style={{ alignSelf: "flex-end" }}
            >
              {technologies.map((technology, index) => {
                return <span key={index}>{technology}</span>;
              })}
            </div>
            <div className="links-container" style={{ alignSelf: "flex-end" }}>
              <a href={liveLink} target="blank">
                <button className="link-button">Visit Site!</button>
              </a>
              <a href={github} target="blank">
                <button style={{ marginLeft: "10px" }} className="link-button">
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="Project-info-container">
            <h4>{name}</h4>
            <p>{about}</p>
            <div className="technologies-container">
              {technologies.map((technology, index) => {
                return <span key={index}>{technology}</span>;
              })}
            </div>
            <div className="links-container">
              <a href={liveLink} target="blank">
                <button style={{ marginRight: "10px" }} className="link-button">
                  Visit Site!
                </button>
              </a>
              <a href={github} target="blank">
                <button className="link-button">Github</button>
              </a>
            </div>
          </div>
          <a href={liveLink} target="blank" className="image-liveLink">
            <div>
              <button>Check it out</button>
            </div>
            <img src={picture} alt="Project"></img>
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
