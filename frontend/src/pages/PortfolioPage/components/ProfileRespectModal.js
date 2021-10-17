import '../style/ProfileRespectModal.css'
const ProfileRespectModal = ({title, list}) =>{
    return(
    <div className="respect-modal-container">
        <div className="respect-modal-title">
            <span>{title}</span>
        </div>
        <div className="respect-modal-people">
        {list && list.map((item)=>(
        <div className="respect-modal-person">
            <img src={item.profileImg}/>
            <span className="respect-modal-person-name">{item.name}</span>
            <span className="respect-modal-person-nickname">@{item.nickname}</span>
        </div>   
        ))     
        }
        </div>
        
    </div>)
}

export default ProfileRespectModal;