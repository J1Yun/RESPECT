import React from "react";
import "../styles/AroundCard.css";
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
    workplace: null,
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
    workplace: "Willog",
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
    workplace: "Line",
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
    workplace: null,
    img: "https://img.mimint.co.kr/bbs/2020/05/27/C2005270925264610r.jpeg",
  },
];
const AroundCard = () => {
  return (
    <div className="around-container">
      {cards &&
        cards.map((card) => (
          <div className="around-card">
            <img className="around-card-img" src={card.img} />
            <div className="around-contents">
              <div>
                <span className="around-name">{card.name}</span>
                <span className="around-nickname">@{card.nickname}</span>
                <span className="around-respect">👊{card.respect}</span>
              </div>
              {card.state == 1 ? (
                <></>
              ) : (
                <div className="around-workplace">🏢 {card.workplace}</div>
              )}
              <div>
                <div className="around-univ">🎓 {card.university}</div>
                <div className="around-location">🗺️ {card.location}</div>
              </div>
              <div className="around-interest">
                <div>🌟 Interest</div>
                <div className="around-interest-list">{card.interest}</div>
              </div>
              <div className="around-tech">
                <div>🛠 Tech Stack</div>
                <div className="around-tech-list">{card.techStack}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AroundCard;
