import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
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

  // useState for login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {/* row1 - login */}
      {!isLoggedIn && (
        <div className='btn-login' onClick={handleLogin}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>Login</div>
        </div>
      )}

      {isLoggedIn && (
        <div className='btn-login' onClick={handleLogout}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>Logout</div>
        </div>
      )}

      {/* row2 - logo */}
      <div className='nav-section'>
        <img
          width={100}
          src='https://s.yimg.com/fz/api/res/1.2/bJg5qnc0iygSvtVUq.7wGg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7474a016-1742-3543-b3b7-679f8bd7d852/t_500x300'
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
