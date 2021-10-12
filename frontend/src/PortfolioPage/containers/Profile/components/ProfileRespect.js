import '../style/ProfileRespect.css'
import respectBtn from '../style/img/respect.png'
const ProfileRespect = () =>{
    return(
        <div className="profile-respect">
            <div className="profile-respect-me">
                이 사람을&nbsp;
                <span className="profile-respect-me-btn">12명</span>
                이
            </div>
            <div className="profile-respect-me-toggle">
                <div>나를 리스펙</div>
                <div>map</div>
            </div>
            <div className="profile-respect-you">
                이 사람은&nbsp;
                <span className="profile-respect-you-btn">112명</span>
                을
            </div>
            <div className="profile-respect-you-toggle">
                    <div>내가 리스펙</div>
                    <div>map</div>
            </div>
            <div className="profile-respect-btn">
                <img className="profile-respect-img" src={respectBtn}/>
            </div>
        </div>
    )
}

export default ProfileRespect;