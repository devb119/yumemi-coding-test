/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import './layout.css';

const Header = () => (
  <header id="header" className="header">
    <div className="logo-container">
      <a href="/">
        <img
          src="https://www.yumemi.co.jp/images/logo_yumemi_01.svg"
          alt="yumemi logo"
          className="logo"
        />
      </a>
      <p className="com-name">Yumemi Coding Test</p>
    </div>
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
        <li>
          <button type="button" className="cta-btn">
            Try for free
          </button>
        </li>
      </ul>
    </nav>

    <button type="button" className="btn-mobile-nav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mobile-icon"
        name="open"
        onClick={() =>
          document.getElementById('header').classList.add('nav-open')
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mobile-icon"
        name="close"
        onClick={() =>
          document.getElementById('header').classList.remove('nav-open')
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m-15 0l15 15"
        />
      </svg>
    </button>
  </header>
);

export default Header;
