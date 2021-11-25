import "pages/PortfolioPage/styles/Study.css";
const studies = [
  {
    title: "Deep Learning",
    subject: "Python",
    contents: ["사이킷런과 매트플롯 라이브러리", "수치예측", "경사하강법"],
  },
  {
    title: "Web Scraping",
    subject: "Python BeautifulSoup",
    contents: [
      "BeautifulSoup 라이브러리",
      "정규식",
      "네이버 웹툰 사이트 스크래핑",
    ],
  },
  {
    title: "Operation System",
    subject: "Linux",
    contents: ["하드웨어와 소프트웨어", "프로세스 모델", "스레드 모델"],
  },
];
const Study = () => {
  return (
    <div className="study-container">
      <div className="study-title">
        <span>✏</span>
        <span>Study</span>
      </div>
      <div className="study-div">
        {studies &&
          studies.map((item) => (
            <div>
              <div className="study-titles">
                <span>{item.title}</span>
                <span>{item.subject}</span>
              </div>
              <ol>
                {item.contents.map((content) => (
                  <li>{content}</li>
                ))}
              </ol>
              {studies.indexOf(item) != studies.length - 1 && (
                <hr
                  width="850px"
                  style={{ position: "relative", left: "-40px" }}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Study;
