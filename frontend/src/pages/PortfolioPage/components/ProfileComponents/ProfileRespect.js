import 'pages/PortfolioPage/styles/ProfileRespect.css'

import respectBtn from 'pages/PortfolioPage/styles/img/respect.png'

import {useState, useEffect, useRef} from 'react'
import ProfileRespectModal from './ProfileRespectModal';

const respect = [
    {
        name:'김채은',
        nickname:'chchaeun',
        profileImg:'https://everythingisviral.com/wp-content/uploads/2020/10/polite-cat.png',
    },
    {
        name:'최지윤',
        nickname:'jiyun',
        profileImg:'https://i1.sndcdn.com/avatars-pFryORA9fglJ61WU-jDhiQQ-t240x240.jpg',
    },
    {
        name:'윤준성',
        nickname:'js111',
        profileImg:'https://pbs.twimg.com/profile_images/1257905363816349696/lIC2V3mt.jpg',
    },
    {
        name:'이성준',
        nickname:'seongjun',
        profileImg:'https://i.redd.it/tg5i8jyjb2g21.jpg',
    },
    {
        name:'김단국',
        nickname:'dankook',
        profileImg:'https://wallpaperaccess.com/full/2337322.jpg',
    },
]

const ProfileRespect = () =>{

    const [respectMe, setRespectMe] = useState(false)
    const [respectYou, setRespectYou] = useState(false)
    
    const meModal = useRef()
    const youModal = useRef()
    const meToggle = useRef()
    const youToggle = useRef()

    const handleClickOutside = (e) =>{
        
        if (!meToggle.current.contains(e.target) && meModal.current){
            if(!meModal.current.contains(e.target)) setRespectMe(false);
        }
        if(!youToggle.current.contains(e.target) && youModal.current){
            if(!youModal.current.contains(e.target)) setRespectYou(false);
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const onRespectMeClick = () =>{
        setRespectMe(true)
    }
    const onRespectYouClick = () =>{
        setRespectYou(true)
    }

    
    return(
        <div className="profile-respect">
            <div className="profile-respect-me">
                이 사람을&nbsp;
                <span ref={meToggle} className="profile-respect-me-btn" onClick={onRespectMeClick}>12명</span>
                이
            </div>
            {respectMe && <div ref={meModal} className="profile-respect-modal">
                <ProfileRespectModal title="나를 리스펙" list={respect}/>
            </div>}
            <div className="profile-respect-you">
                이 사람은&nbsp;
                <span ref={youToggle}className="profile-respect-you-btn" onClick={onRespectYouClick}>112명</span>
                을
            </div>
            {respectYou && <div ref={youModal} className="profile-respect-modal">
                <ProfileRespectModal title="내가 리스펙" list={respect}/>
            </div>}
            <div className="profile-respect-btn">
                <img className="profile-respect-img" src={respectBtn}/>
            </div>
        </div>
    )
}

export default ProfileRespect;