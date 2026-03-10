import './css/header.css';
import { Link } from 'react-router-dom';
// --- 아래는 예시 컴포넌트입니다. ---
function Header(){
  return (
    <header className="header">
      <div className='contents'>
        <div>로고</div>
          <nav className='navigation'>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/mypage">마이페이지</Link></li>
              <li><Link to="/work_page">work페이지</Link></li>
              <li><Link to="/GridPage">Grid페이지</Link></li>
            </ul>
          </nav>
      </div>
    </header>
  )
};

export default Header;
