import React, { useState } from "react";

import "pages/ProjectPage/styles/ProjectRegisterPage.css";
import MarkdownReactEditor from "markdown-react-editor";

const project = {
  title: "To do list 서비스",
  outline: "Chrome App 'Momentum' clone coding",
  markdown: "# hello",
};
const ProjectRegisterPage = () => {
  const [title, setTitle] = useState(project.title);
  const [outline, setOutline] = useState(project.outline);
  const [role, setRole] = useState();
  const [period, setPeriod] = useState();
  const [markdown, setMarkdown] = useState(project.markdown);
  const onTitleChange = (e) => {
    const {
      target: { value },
    } = e;
    setTitle(value);
  };
  const onOutlineChange = (e) => {
    const {
      target: { value },
    } = e;
    setOutline(value);
  };
  const onRoleChange = (e) => {
    const {
      target: { value },
    } = e;
    setRole(value);
  };
  const onPeriodChange = (e) => {
    const {
      target: { value },
    } = e;
    setPeriod(value);
  };
  const onUploadClick = () => {
    console.log(title, outline, role, period, markdown);
    window.location.href = "/project/0";
  };
  return (
    <div>
      <div className="project-register-container">
        <div className="project-register-header">
          <span className="project-register-category">Project 등록</span>
          <input
            onChange={onTitleChange}
            className="project-header-title-input"
            value={title}
          />
        </div>
        <div className="project-register-outline-container">
          <div>
            <span className="project-outline-titles">Image</span>
            <input
              className="project-outline-img"
              type="file"
              accept="image/*"
            />
          </div>
          <div>
            <span className="project-outline-titles">Outline</span>
            <input
              className="project-outline-inputs"
              onChange={onOutlineChange}
              value={outline}
            />
          </div>
          <div>
            <span className="project-outline-titles">Role</span>
            <input
              className="project-outline-inputs"
              onChange={onRoleChange}
              value={role}
            />
          </div>
          <div>
            <span className="project-outline-titles">Period</span>
            <input
              className="project-outline-inputs"
              onChange={onPeriodChange}
              value={period}
            />
          </div>
          <div>
            <span className="project-outline-titles">Tech Stack</span>
            <span className="project-outline-stack">스택 불러오기</span>
          </div>
        </div>
        <div className="project-readme-container">
          <div className="project-readme-title">README</div>
          <MarkdownReactEditor
            className="project-readme-editor"
            value={markdown}
            onChange={(v) => {
              setMarkdown(v);
            }}
          />
        </div>
        <button
          style={{ cursor: "pointer" }}
          className="project-submit"
          onClick={onUploadClick}
        >
          UPLOAD
        </button>
      </div>
    </div>
  );
};

export default ProjectRegisterPage;
