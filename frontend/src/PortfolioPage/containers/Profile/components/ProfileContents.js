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
                (위치 아이콘) Yongin, Gyeonggi-do
            </div>
            <div className="profile-connect">
                <div className="profile-connect-phone">
                    (icon) 010-4780-9121
                </div>
                <div className="profile-connect-email">
                    (icon) kce3615@naver.com
                </div>
            </div>
        </div>
    
    )
}

export default ProfileContents;