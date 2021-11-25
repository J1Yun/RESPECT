import Profile from "pages/PortfolioPage/containers/Profile";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Interest from "./containers/Interest";
import Projects from "./containers/Projects";
import Study from "./containers/Study";
import TechStack from "./containers/TechStack";

const PortfolioPage = () => {
  return (
    <div>
      <Profile />
      <Interest />
      <TechStack />
      <Experience />
      <Education />
      <Projects />
      <Study />
    </div>
  );
};

export default PortfolioPage;
