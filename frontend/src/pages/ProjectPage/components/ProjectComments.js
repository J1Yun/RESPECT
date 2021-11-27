import "../styles/ProjectComments.css";

const comments = [
  {
    name: "최지윤",
    nickname: "@J1yun",
    comment:
      "유익한 정보 감사합니다. 도움이 많이 되었습니다.유익한 정보 감사합니다. 도움이 많이 되었습니다.유익한 정보 감사합니다. 도움이 많이 되었습니다.유익한 정보 감사합니다. 도움이 많이 되었습니다.",
    img: "https://i.pinimg.com/736x/d2/27/d0/d227d050dc043103e329c698f5a44e51.jpg",
  },
  {
    name: "데브몬",
    nickname: "@devmon",
    comment: "감사합니다!",
    img: "https://pbs.twimg.com/media/EpiuQ6oXUAAQtLS.jpg",
  },
];
const ProjectComments = () => {
  return (
    <div className="project-comments-container">
      <div className="project-comments-title">Comments</div>
      <form className="project-comment-form">
        <textarea />
        <button>Send</button>
      </form>
      {comments &&
        comments.map((item) => (
          <div className="project-comment">
            <img src={item.img} />
            <span className="project-comment-name">{item.name}</span>
            <span className="project-comment-nickname">{item.nickname}</span>
            <div>{item.comment}</div>
          </div>
        ))}
    </div>
  );
};
export default ProjectComments;
