import 'pages/PortfolioPage/styles/Profile/ProfileContents.css'

import {FaLocationArrow, FaPhoneAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const ProfileContents =()=>{
    return (
        <div className="profile-contents">
            <div className="profile-names">
                <span className="profile-name">데브몬</span>
                <span className="profile-nickname">@devmon</span>
            </div>
            <div className="profile-info">
                안녕하세요. 풀스택 개발자를 꿈꾸는 데브몬입니다.
            </div>
            <div className="profile-location">
                <FaLocationArrow size={12} color="#0275B1" style={{
                    'position': 'absolute',
                    'left': '-20px',
                    'top': '3px'
                }}/>
                Yongin, Gyeonggi-do
            </div>
            <div className="profile-connect">
                <div style={{'paddingBottom': '8px'}}>
                    Connect
                </div>
                <span className="profile-connect-phone">
                    <FaPhoneAlt size={18} style={{
                        'position': 'absolute',
                        'left': '-24px',
                        'top': '2px'
                    }}/> 010-4780-9121
                </span>
                <span className="profile-connect-email">
                    <HiMail size={22} style={{
                        'position': 'absolute',
                        'left': '-26px',
                        'top': '-1px'
                    }}/> kce3615@naver.com
                </span>
            </div>
        </div>
    
    )
}

export default ProfileContents;