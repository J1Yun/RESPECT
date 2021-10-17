import ProfileBackground from "pages/PortfolioPage/components/ProfileComponents/ProfileBackground";
import ProfileContents from "pages/PortfolioPage/components/ProfileComponents/ProfileContents";
import ProfileImg from "pages/PortfolioPage/components/ProfileComponents/ProfileImg";
import ProfileRespect from "pages/PortfolioPage/components/ProfileComponents/ProfileRespect";

import 'pages/PortfolioPage/styles/Profile.css'

const Profile=()=>{
    return (
        <div className="profile-container">
            <ProfileBackground />
            <ProfileImg/>
            <ProfileContents/>
            <ProfileRespect/>   
        </div>
    )
}
export default Profile;