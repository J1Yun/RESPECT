import 'pages/PortfolioPage/styles/Profile/ProfileBackground.css'
import ProfileBtns from './ProfileBtns';

const ProfileBackground = () =>{
    return(
        <div className="profile-background"
            style={{"background": "#C4C4C4"}}>
            <ProfileBtns/>
        </div>
    );
}
export default ProfileBackground;