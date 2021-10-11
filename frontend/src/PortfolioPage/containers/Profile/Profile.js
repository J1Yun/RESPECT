import ProfileBackground from "./components/ProfileBackground";
import ProfileContents from "./components/ProfileContents";
import ProfileImg from "./components/ProfileImg";
import ProfileRespect from "./components/ProfileRespect";

import './style/Profile.css'

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