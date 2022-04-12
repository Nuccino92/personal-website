import "./Experience.scss";
import Project from "./project/Project";
import Projects from "./project/projects.json";

const Experience = () => {
  return (
    <div className="Experience">
      <h1> Some of the things i've built </h1>
      <main>
        {Projects.map((project, index) => {
          return <Project project={project} key={index} index={index} />;
        })}
      </main>
    </div>
  );
};

export default Experience;
