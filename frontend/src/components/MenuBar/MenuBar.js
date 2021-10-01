import logo from '../../logo.png';
import {BiLinkExternal} from 'react-icons/bi';

// import ProfileBtn from 'components/MenuBar/ProfileBtn'
// import SignBtn from 'components/MenuBar/SignBtn';

import {useState} from 'react'
import './style/MenuBar.css'

const MenuBar = () => {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div id="menu">
        <nav id="menubar" className="navbar navbar-expand bg-white navbar-light">
            <a className="navbar-brand" href="/">
            <img src={logo} id="logo"/>
            </a>

            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/open">Open Lab</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/recruitment">Connect</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" target='_blank'>
                Univ.
                <BiLinkExternal className="link-icon"/>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" target='_blank' >
                RISS
                <BiLinkExternal className="link-icon" />
                </a>
            </li>
            </ul>
{/* 
            {isLoggedIn ? <ProfileBtn/>:<SignBtn/>} */}

        </nav>
        </div>
        
    );
}

export default MenuBar;
