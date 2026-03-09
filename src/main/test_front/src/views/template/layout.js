import Header from "./header";
import Footer from "./footer";
import "./css/layout.css";
// --- 아래는 예시 컴포넌트입니다. ---
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )
};

export default Layout;
