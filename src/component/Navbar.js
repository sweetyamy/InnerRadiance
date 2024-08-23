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
        <div className='btn-login' onClick={goToLogin}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className='login-txt'>Login</div>
        </div>
      )}

      {isLoggedIn && (
        <div className='btn-login' onClick={goToLogout}>
          <div>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <div className='login-txt'>Logout</div>
        </div>
      )}

      {/* 로고 및 햄버거 아이콘 */}
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

      {/* 네비게이션 메뉴 (큰 화면에서는 보임) */}
      <div className='menus'>
        <ul>
          {menuList.map((menu) => (
            <li key={menu.path}>
              <a href={menu.path}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* 사이드바 메뉴 (작은 화면에서 보임) */}
      <div className={`side-menubar ${sideOpen ? 'open' : ''}`}>
        <div className='side-menu-header'>
          <FontAwesomeIcon
            icon={faX}
            className='close-icon'
            onClick={closeSide}
          />
        </div>
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

      {/* 검색 입력란 */}
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
  );
}

export default Navbar;
