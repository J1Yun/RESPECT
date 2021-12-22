import 'pages/PortfolioPage/styles/ProjectAdd.css';
const repos = [
  { id: 0, name: 'To do list Service', regist: 1 },
  { id: 1, name: '방명록 서비스', regist: 1 },
  { id: 2, name: '영화 순위 서비스', regist: 1 },
  { id: 3, name: 'Web-Scraping', regist: 1 },
  { id: 4, name: 'Study-redux', regist: 1 },
  { id: 5, name: 'NodeJS', regist: 1 },
  { id: 6, name: '나만의 달력', regist: 1 },
  { id: 7, name: 'JavaScript', regist: 1 },
  { id: 8, name: 'Operating System', regits: 1 },
];

const ProjectAdd = () => {
  const onReposClick = (id) => {
    console.log(1);
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
                <div className="project-add-repos" onClick={() => onReposClick(item.id)}>
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
