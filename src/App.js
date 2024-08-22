import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll.js';
import Login from './page/Login.js';
import Navbar from './component/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute.js';

// 1. 전체페이지
// - navigation bar
// - 전체상품 볼수있다
// 2. 로그인 페이지
// - 로그인 버튼을 누르면 로그인 페이지를 볼 수 있다
// - 상품 디테일을 눌렀으나 로그인이 안되어 있을 때 로그인 페이지를 볼 수 있다
// - 로그인 되어있을때는 디테일 페이지를 볼 수 있다
// - 로그아웃 버튼을 누르면 로그아웃 된다
// - 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다
// - 로그인 토글
// 3. 상품 상세페이지
// 4. 상품 검색을 할 수 있다

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log('authenticate', authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar isLoggedIn={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} /> {/* 👈 Renders at /app/ */}
        <Route
          path='/login'
          element={<Login setAuthenticate={setAuthenticate} />}
        />{' '}
        {/* 👈 Renders at /app/ */}
        <Route
          path='/product/:id'
          element={<PrivateRoute authenticate={authenticate} />}
        />{' '}
        {/* 👈 Renders at /app/ */}
      </Routes>
    </div>
  );
}

export default App;
