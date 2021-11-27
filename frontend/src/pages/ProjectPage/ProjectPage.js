import "./styles/ProjectPage.css";
import ProjectHeader from "./components/ProjectHeader";
import ProjectOutline from "./components/ProjectOutline";

import ReactMarkdown from "react-markdown";
import ProjectComments from "./components/ProjectComments";

const markdown = "# hello";

const ProjectPage = () => {
  return (
    <div>
      <div className="project-container">
        <ProjectHeader />
        <ProjectOutline />
        <div className="project-readme-container">
          <div className="project-readme-title">README</div>
          <ReactMarkdown className="project-readme" children={markdown} />
        </div>
        <ProjectComments />
      </div>
    </div>
  );
};
export default ProjectPage;
