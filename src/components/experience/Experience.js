import "./Experience.scss";
import Project from "./project/Project";
import Projects from "./project/projects.json";
import ExtraProject from "./extraProjects/ExtraProject";
import ExtraProjects from "./extraProjects/extraProjects.json";
import { useRef, useState } from "react";

const Experience = ({ refExperience }) => {
  const extrasRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
    !showMore && extrasRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Experience" ref={refExperience}>
      <h1> Some of the things I've built </h1>
      <main>
        {Projects.map((project, index) => {
          return <Project project={project} key={index} index={index} />;
        })}
        {showMore && (
          <div className="extra-projects-container">
            {ExtraProjects.map((project, index) => {
              return (
                <ExtraProject project={project} key={index} index={index} />
              );
            })}
          </div>
        )}
        <button
          className="show-more-btn"
          onClick={handleShowMore}
          ref={extrasRef}
        >
          {showMore ? "Remove projects" : "View more projects "}
        </button>
      </main>

      {/* background text */}
      <div className="experience-background-text">Experience</div>
    </div>
  );
};

export default Experience;
