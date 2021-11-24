import Profile from "pages/PortfolioPage/containers/Profile";
import Interest from "./containers/Interest";
import TechStack from "./containers/TechStack";

const PortfolioPage = ()=>{
    return(
        <div>
            <Profile/>
            <Interest/>
            <TechStack/>
        </div>
    );
}

export default PortfolioPage;