import "pages/PortfolioPage/styles/Projects.css";
import { useState, useEffect, useRef } from "react";
import ProjectAdd from "../components/Project/ProjectAdd";
const projects = [
  {
    title: "To do list Service",
    img: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
  },
  {
    title: "방명록 서비스",
    img: "https://t1.daumcdn.net/cfile/blog/2455914A56ADB1E315",
  },
  {
    title: "영화 순위 서비스",
    img: "https://t1.daumcdn.net/tistoryfile/fs15/20_tistory_2009_02_24_20_58_49a3e0c987e78?x-content-disposition=inline",
  },
];

const Projects = () => {
  const [add, setAdd] = useState(false);
  const modal = useRef();
  const btn = useRef();
  const handleClickOutside = (e) => {
    if (modal.current && !modal.current.contains(e.target)) {
      if (btn.current && !btn.current.contains(e.target)) setAdd(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const onAddClick = () => {
    setAdd(true);
  };

  return (
    <div className="projects-container">
      <div className="projects-title">
        <span>🔥</span>
        <span className="project-title-text">Projects</span>

        <span>3 of {projects.length}</span>
      </div>
      <button ref={btn} onClick={onAddClick} className="project-add">
        Add
      </button>
      {add && (
        <div ref={modal}>
          <ProjectAdd />
        </div>
      )}
      <div className="projects-div">
        {projects &&
          projects.map((item) => (
            <div className="project-box">
              <img
                width="250"
                height="170"
                style={{ objectFit: "cover" }}
                src={item.img}
              />
              <div>{item.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Projects;
