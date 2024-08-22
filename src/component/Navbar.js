import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, setAuthenticate }) {
  const menuList = [
    {
      name: 'Top Rank',
      path: '/'
    },
    {
      name: 'Health',
      path: '/login'
    },
    {
      name: 'Skin Care',
      path: '/login'
    },
    {
      name: 'Maskpack',
      path: '/login'
    },
    {
      name: 'Cleansing',
      path: '/login'
    },
    {
      name: 'Sunscreen',
      path: '/login'
    },
    {
      name: 'On Sale',
      path: '/login'
    },
    {
      name: 'Membership',
      path: '/login'
    },
    {
      name: 'Event',
      path: '/login'
    }
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    setAuthenticate(true);
    navigate('/login');
  };

  const goToLogout = () => {
    setAuthenticate(false);
    navigate('/');
  };

  return (
    <div>
      {/* row1 - login */}
      {!isLoggedIn && (
        <div className='btn-login' onClick={goToLogin}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>Login</div>
        </div>
      )}

      {isLoggedIn && (
        <div className='btn-login' onClick={goToLogout}>
          <div>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
          <div>Logout</div>
        </div>
      )}

      {/* row2 - logo */}
      <div className='nav-section'>
        <img
          width={300}
          src='https://static.oliveyoung.co.kr/pc-static-root/image/comm/h1_logo.png'
          alt='logo'
        />
      </div>
      {/* row3 - Navigation */}
      <div className='menus'>
        <ul>
          {menuList.map((menu) => (
            <li key={menu.path}>
              <a href={menu.path}>{menu.name}</a>
            </li>
          ))}
        </ul>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input
            className='search-input'
            type='text'
            placeholder='Search Products'
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
