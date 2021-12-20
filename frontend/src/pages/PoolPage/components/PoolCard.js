import React from "react";
import "../styles/PoolCard.css";
const cards = [
  {
    name: "김채은",
    nickname: "chchaeun",
    respect: 13,
    university: "Dankook Univ.",
    location: "Yongin, Gyoeng-gi",
    interest: "인공지능 웹풀스택 머신러닝 블록체인",
    techStack: "Python, React.JS, Java",
    state: 1,
    img: "https://img.mimint.co.kr/bbs/2020/05/27/C2005270925264610r.jpeg",
  },
  {
    name: "최지윤",
    nickname: "J1YUN",
    respect: 12,
    university: "Dankook Univ.",
    location: "Yongin, Gyoeng-gi",
    interest: "서버/백엔드 사물인터넷(IoT) 데이터엔지니어",
    techStack: "Node.JS, Django, MySQL",
    state: 2,
    img: "https://img.mimint.co.kr/bbs/2020/05/27/C2005270925264610r.jpeg",
  },
  {
    name: "윤준성",
    nickname: "wnstjd9701",
    respect: 11,
    university: "Dankook Univ.",
    location: "Seoul",
    interest: "서버/백엔드 데이터엔지니어 응용프로그램",
    techStack: "Node.JS, Java, Python",
    state: 2,
    img: "https://img.mimint.co.kr/bbs/2020/05/27/C2005270925264610r.jpeg",
  },
  {
    name: "이성준",
    nickname: "castlejun-2",
    respect: 11,
    university: "Dankook Univ.",
    location: "Seoul",
    interest: "응용프로그램 인공지능(AI) 웹풀스택",
    techStack: "Node.JS Python Linux",
    state: 1,
    img: "https://img.mimint.co.kr/bbs/2020/05/27/C2005270925264610r.jpeg",
  },
];
const PoolCard = () => {
  return (
    <div className="pool-card-container">
      {cards &&
        cards.map((card) => (
          <div className="pool-card">
            <img className="pool-card-img" src={card.img} />
            <div className="pool-contents">
              {card.state == 1 ? (
                <div className="pool-state">취업 준비 중📚</div>
              ) : (
                <div className="pool-state">이직 준비 중💻‍</div>
              )}
              <div>
                <span className="pool-name">{card.name}</span>
                <span className="pool-nickname">@{card.nickname}</span>
                <span className="pool-respect">👊{card.respect}</span>
              </div>
              <div>
                <div className="pool-univ">🎓 {card.university}</div>
                <div className="pool-location">🗺️ {card.location}</div>
              </div>
              <div className="pool-interest">
                <div>🌟 Interest</div>
                <div className="pool-interest-list">{card.interest}</div>
              </div>
              <div className="pool-tech">
                <div>🛠 Tech Stack</div>
                <div className="pool-tech-list">{card.techStack}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PoolCard;
