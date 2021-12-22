import 'pages/PortfolioPage/styles/Profile/ProfileBtns.css';

import { FiEdit } from 'react-icons/fi';
import { RiSettings4Fill } from 'react-icons/ri';

const ProfileBtns = () => {
  const uploadPool = () => {
    alert('포트폴리오가 인재풀에 등록되었습니다.');
  };
  return (
    <div>
      <button className="profile-upload" onClick={uploadPool}>
        UPLOAD TO POOL
      </button>
      <button className="profile-edit">
        <FiEdit
          style={{
            paddingRight: '5px',
          }}
        />
        EDIT PROFILE
      </button>
      <button className="profile-setting">
        <RiSettings4Fill size={22} color="#525252" style={{ paddingTop: '2px' }} />
      </button>
    </div>
  );
};
export default ProfileBtns;
