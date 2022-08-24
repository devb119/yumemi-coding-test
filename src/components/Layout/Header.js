import './layout.css';

const Header = () => (
  <header id="header" className="header">
    <a href="/">
      <img
        src="https://www.yumemi.co.jp/images/logo_yumemi_01.svg"
        alt="yumemi logo"
        className="logo"
      />
    </a>
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <a href="#header" className="main-nav-link">
            Nav 1
          </a>
        </li>
        <li>
          <a href="#header" className="main-nav-link">
            Nav 2
          </a>
        </li>
        <li>
          <a href="#header" className="main-nav-link">
            Nav 3
          </a>
        </li>
        <li>
          <a href="#header" className="main-nav-link">
            Nav 4
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
