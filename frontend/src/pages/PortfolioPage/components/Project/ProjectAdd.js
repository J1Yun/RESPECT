import "pages/PortfolioPage/styles/ProjectAdd.css";
const repos = [
  { id: 0, name: "To do list Service", regist: 1 },
  { id: 1, name: "To do list Service", regist: 1 },
  { id: 2, name: "To do list Service", regist: 1 },
  { id: 3, name: "To do list Service", regist: 1 },
  { id: 4, name: "To do list Service", regist: 1 },
  { id: 5, name: "To do list Service", regist: 1 },
  { id: 6, name: "To do list Service", regist: 1 },
  { id: 1, name: "To do list Service", regist: 1 },
  { id: 1, name: "To do list Service", regist: 1 },
  { id: 2, name: "To do list Service", regist: 1 },
  { id: 3, name: "To do list Service", regist: 1 },
  { id: 4, name: "To do list Service", regist: 1 },
  { id: 5, name: "To do list Service", regist: 1 },
  { id: 6, name: "To do list Service", regist: 1 },
  { id: 0, name: "To do list Service", regist: 1 },
  { id: 1, name: "To do list Service", regist: 1 },
  { id: 2, name: "To do list Service", regist: 1 },
  { id: 3, name: "To do list Service", regist: 1 },
  { id: 4, name: "To do list Service", regist: 1 },
  { id: 5, name: "To do list Service", regist: 1 },
  { id: 6, name: "To do list Service", regist: 1 },
  { id: 1, name: "To do list Service", regist: 1 },
  { id: 1, name: "To do list Service", regist: 1 },
  { id: 2, name: "To do list Service", regist: 1 },
  { id: 3, name: "To do list Service", regist: 1 },
  { id: 4, name: "To do list Service", regist: 1 },
  { id: 5, name: "To do list Service", regist: 1 },
  { id: 6, name: "To do list Service", regist: 1 },
];
const ProjectAdd = () => {
  const onReposClick = (id) => {
    window.location.href = `/project/register/${id}`;
  };
  return (
    <div className="project-add-background">
      <div className="project-add-container">
        <div className="project-add-title">
          <span>프로젝트 추가</span>
        </div>
        {repos &&
          repos.map((item) => (
            <>
              {item.regist ? (
                <div
                  className="project-add-repos"
                  onClick={() => onReposClick(item.id)}
                >
                  {item.name}
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
      </div>
    </div>
  );
};
export default ProjectAdd;
