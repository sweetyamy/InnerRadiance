import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faSearch,
  faSignOutAlt,
  faX,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, setAuthenticate }) {
  const menuList = [
    {
      name: 'Top Rank',
      path: '/'
    },
    {
      name: 'Health',
      path: '/health'
    },
    {
      name: 'Skin Care',
      path: '/skincare'
    },
    {
      name: 'Maskpack',
      path: '/maskpack'
    },
    {
      name: 'Cleansing',
      path: '/cleansing'
    },
    {
      name: 'Sunscreen',
      path: '/sunscreen'
    },
    {
      name: 'On Sale',
      path: '/sale'
    },
    {
      name: 'Membership',
      path: '/membership'
    },
    {
      name: 'Event',
      path: '/event'
    }
  ];

  const navigate = useNavigate();

  // responsible side menu
  const [sideOpen, setSideOpen] = useState(false);
  // responsible search input toggle useState
  const [searchVisible, setSearchVisible] = useState(false);

  // responsible side menu toggle
  const openSide = () => {
    setSideOpen(true);
  };

  const closeSide = () => {
    setSideOpen(false);
  };

  // responsible search input toggle
  const toggleSearchInput = () => {
    setSearchVisible(!searchVisible);
  };

  const goToLogin = () => {
    setAuthenticate(true);
    navigate('/login');
  };

  const goToLogout = () => {
    setAuthenticate(false);
    navigate('/');
  };

  const searchFunction = (e) => {
    if (e.key === 'Enter') {
      console.log(`${e.key} clicked`);
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      console.log('keyword', keyword);
      // 검색어를 URL에 반영하여 navigate 사용
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      {/* row1 - login */}
      {!isLoggedIn && (
        <div className='login-btn' onClick={goToLogin}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className='login-txt'>Login</div>
        </div>
      )}

      {isLoggedIn && (
        <div className='login-btn' onClick={goToLogout}>
          <div>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <div className='login-txt'>Logout</div>
        </div>
      )}

      {/* logo and hamburger */}
      <div className='nav-logo'>
        <a href='/'>
          <img
            width={300}
            src='https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png'
            alt='logo'
          />
        </a>
        <FontAwesomeIcon
          icon={faBars}
          className='hamburger-icon'
          onClick={openSide}
        />
      </div>

      {/* navigation with search area */}
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li key={menu.path}>
              <a href={menu.path}>{menu.name}</a>
            </li>
          ))}
        </ul>
        <div className='search-area'>
          <FontAwesomeIcon
            className='search-ico'
            icon={faSearch}
            onClick={toggleSearchInput}
          />
          <input
            className={`search-input ${searchVisible ? 'visible' : ''}`}
            type='text'
            placeholder='Search Products'
            onKeyDown={searchFunction}
          />
        </div>
      </div>

      {/* side menu */}
      <div className={`side-menubar ${sideOpen ? 'open' : ''}`}>
        <div className='side-menu-header'>
          <FontAwesomeIcon
            icon={faX}
            className='close-icon'
            onClick={closeSide}
          />
        </div>
        {/* menu */}
        <ul className='side-menus'>
          {menuList.map((menu) => (
            <li
              key={menu.path}
              onClick={() => {
                navigate(menu.path);
                closeSide();
              }}
              className='side-menu-list'
            >
              {menu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
