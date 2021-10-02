import logo from '../../logo.png';

import {BsCollectionFill, BsFillPeopleFill} from 'react-icons/bs'

// import ProfileBtn from 'components/MenuBar/ProfileBtn'
// import SignBtn from 'components/MenuBar/SignBtn';

import {useState} from 'react'
import './style/MenuBar.css'

const MenuBar = () => {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div id="menu">
            <div id="logo-zone">
            <a  href="/">
            <img src={logo} id="logo"/>
            </a>
            </div>

            <div id="items">
            <div id="around">
                <a href="/around">
                <BsCollectionFill color='#181818' size={22} id="around-icon"/>    
                <div id="around-txt">둘러보기</div>
                </a>

            </div>
            <div id="pool">
                <a  href="/pool">
                <BsFillPeopleFill color='#181818' size={22} id="pool-icon"/>    
                <div id="pool-txt">인재풀</div>
                </a>
            </div>
            </div>
{/* 
            {isLoggedIn ? <ProfileBtn/>:<SignBtn/>} */}

        </div>
        
    );
}

export default MenuBar;
