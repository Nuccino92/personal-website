import "./Experience.scss";
import Project from "./project/Project";
import Projects from "./project/projects.json";

const Experience = ({ refExperience }) => {
  return (
    <div className="Experience" ref={refExperience}>
      <h1> Some of the things i've built </h1>
      <main>
        {Projects.map((project, index) => {
          return <Project project={project} key={index} index={index} />;
        })}
      </main>
      <div className="experience-background-text">Experience</div>
    </div>
  );
};

export default Experience;
