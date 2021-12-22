import logo from '../../logo.png';

import { BsCollectionFill, BsFillPeopleFill } from 'react-icons/bs';

// import ProfileBtn from 'components/MenuBar/ProfileBtn'
// import SignBtn from 'components/MenuBar/SignBtn';

import { useState, useEffect } from 'react';
import 'pages/MenuBar/styles/MenuBar.css';
import NonUserBtn from './components/NonUserBtn';

const MenuBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAround, setIsAround] = useState(false);
  const [isPool, setIsPool] = useState(false);

  const active = {
    borderBottom: '2px #1F66C2',
    borderBottomStyle: 'solid',
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('around')) {
      setIsAround(true);
    } else if (path.includes('pool')) {
      setIsPool(true);
    }
  }, []);

  return (
    <div id="menu">
      <div id="logo-zone">
        <a href="/user/22">
          <img src={logo} id="logo" />
        </a>
      </div>

      <div id="items">
        {isAround ? (
          <div style={active} id="around">
            <a href="/around">
              <BsCollectionFill color="#1F66C2" size={22} id="around-icon" />
              <div style={{ color: '#1F66C2' }} id="around-txt">
                둘러보기
              </div>
            </a>
          </div>
        ) : (
          <div id="around">
            <a href="/around">
              <BsCollectionFill color="#181818" size={22} id="around-icon" />
              <div id="around-txt">둘러보기</div>
            </a>
          </div>
        )}

        {isPool ? (
          <div style={active} id="pool">
            <a href="/pool">
              <BsFillPeopleFill color="#1F66C2" size={22} id="pool-icon" />
              <div style={{ color: '#1F66C2' }} id="pool-txt">
                인재풀
              </div>
            </a>
          </div>
        ) : (
          <div id="pool">
            <a href="/pool">
              <BsFillPeopleFill color="#181818" size={22} id="pool-icon" />
              <div id="pool-txt">인재풀</div>
            </a>
          </div>
        )}
      </div>
      <NonUserBtn />
      {/* 
            {isLoggedIn ? <ProfileBtn/>:<SignBtn/>} */}
    </div>
  );
};

export default MenuBar;
