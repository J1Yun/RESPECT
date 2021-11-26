import "pages/ProjectPage/ProjectPage.css";
import { AiFillGithub } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
const ProjectPage = () => {
  return (
    <div>
      <div className="project-container">
        <div className="project-header">
          <span className="project-header-category">Project</span>
          <button className="project-header-github">
            <AiFillGithub color="white" size="20" />
            <span
              style={{
                position: "relative",
                left: "2px",
                top: "-4px",
              }}
            >
              Open with Github
            </span>
          </button>
          <button className="project-header-bookmark">
            <BsBookmark size="25" />
          </button>
          <div className="project-header-title">To do list 서비스</div>
          <div className="project-header-profile">
            <img
              width="35"
              height="35"
              src="https://1tb.favim.com/preview/7/773/7735/77357/7735766.jpg"
            />
            <span>김채은</span>
            <span>@chchaeun</span>
          </div>
        </div>
        <div className="project-outline-container"></div>
        <div className="project-readme"></div>
        <div className="project-comments-container"></div>
      </div>
    </div>
  );
};
export default ProjectPage;
