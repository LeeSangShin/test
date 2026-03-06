import Styles from './header.module.css';
// --- 아래는 예시 컴포넌트입니다. ---
const Header = () => {
  return (
    <header className={Styles.header}>
      <div>
        <div>로고</div>
        <nav>
          <ul>
            <li>홈</li>
            <li>마이페이지</li>
            <li>work페이지</li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
