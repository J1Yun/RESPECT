import ProfileBackground from "pages/PortfolioPage/components/Profile/ProfileBackground";
import ProfileContents from "pages/PortfolioPage/components/Profile/ProfileContents";
import ProfileImg from "pages/PortfolioPage/components/Profile/ProfileImg";
import ProfileRespect from "pages/PortfolioPage/components/Profile/ProfileRespect";

import "pages/PortfolioPage/styles/Profile/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <ProfileBackground />
      <ProfileImg />
      <ProfileContents />
      <ProfileRespect />
    </div>
  );
};
export default Profile;
