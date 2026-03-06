import logo from './logo.svg';
import './App.css';
import Details from './views/details';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// --- 아래는 예시 컴포넌트입니다. ---
// 실제 애플리케이션에서는 각 컴포넌트를 별도의 파일로 분리하는 것이 좋습니다.

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/hello')
    .then(response => response.text())
    .then(message =>{
      setMessage(message);
    });
  }, []);

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        여기는 홈 페이지입니다.
      </p>
      <p>
        백엔드 서버로부터 받은 메시지: {message}
      </p>
    </>
  );
}

function MyPage() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        여기는 마이페이지입니다.
        <Details />
      </p>
    </>
  );
}


// --- 라우터가 적용된 메인 앱 컴포넌트 ---

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" style={{ marginRight: '16px' }}>홈</Link>
            <Link to="/mypage">마이페이지</Link>
          </nav>
          <hr style={{ width: '100%', margin: '16px 0' }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
