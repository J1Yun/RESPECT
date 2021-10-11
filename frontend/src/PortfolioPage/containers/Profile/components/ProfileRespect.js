const ProfileRespect = () =>{
    return(
        <div className="profile-respect">
            <div className="profile-respect-me">
                이 사람을
                <button>12명이</button>
                리스펙
            </div>
            <div className="profile-respect-me-toggle">
                <div>나를 리스펙</div>
                <div>map</div>
            </div>
            <div className="profile-repect-you">
                이 사람은
                <button>11명을</button>
                리스펙
            </div>
            <div className="profile-respect-you-toggle">
                    <div>내가 리스펙</div>
                    <div>map</div>
            </div>
            <button className="profile-respect-btn">(img)Respect</button>
        </div>
    )
}

export default ProfileRespect;