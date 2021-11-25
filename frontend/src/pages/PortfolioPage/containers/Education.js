import "pages/PortfolioPage/styles/Education.css";
const Education = () => {
  return (
    <div className="education-container">
      <div className="education-title">
        <span>💡</span>
        <span>Education</span>
      </div>
      <div className="education-div">
        <img
          width="80"
          height="80"
          src="https://ww.namu.la/s/cb2315c3b815eff41b5a3ae21d59dd0309970309317a1b1fb1d0565e6c8d7bd27b4eef794aaca282072c31647e11b4a525cfef4de530064e09c836c9ca0a457941ddb6e56b8fbeee4991b6a88e0b5a22"
        />
        <div>
          <div className="education-period">
            2019. 03. ~ 2023. 02. 졸업(예정)
          </div>
          <div className="education-school">
            단국대학교(Dankook univ.) 죽전캠퍼스
          </div>
          <div className="education-department">SW융합대학 소프트웨어학과</div>
        </div>
      </div>
    </div>
  );
};
export default Education;
