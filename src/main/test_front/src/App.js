import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './views/work/home';
import MyPage from './views/work/mypage';
import WorkPage from './views/work/work_page';
// --- 아래는 예시 컴포넌트입니다. ---
// 실제 애플리케이션에서는 각 컴포넌트를 별도의 파일로 분리하는 것이 좋습니다.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" style={{ marginRight: '16px' }}>홈</NavLink>
            <NavLink to="/mypage">마이페이지</NavLink>
            <NavLink to="/work_page">work페이지</NavLink>
          </nav>
          <hr style={{ width: '100%', margin: '16px 0' }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/work_page" element={<WorkPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
