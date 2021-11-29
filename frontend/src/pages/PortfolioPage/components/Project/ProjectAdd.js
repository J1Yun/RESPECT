const repos = [
  { id: 0, name: "To do list Service", regist: 0 },
  { id: 1, name: "To do list Service", regist: 1 },
  { id: 2, name: "To do list Service", regist: 0 },
  { id: 3, name: "To do list Service", regist: 0 },
  { id: 4, name: "To do list Service", regist: 0 },
  { id: 5, name: "To do list Service", regist: 1 },
  { id: 6, name: "To do list Service", regist: 1 },
];
const ProjectAdd = () => {
  const onReposClick = (id) => {
    window.location.href = `/project/register/${id}`;
  };
  return (
    <div>
      {repos &&
        repos.map((item) => (
          <>
            {item.regist ? (
              <div onClick={() => onReposClick(item.id)}>{item.name}</div>
            ) : (
              <></>
            )}
          </>
        ))}
    </div>
  );
};
export default ProjectAdd;
