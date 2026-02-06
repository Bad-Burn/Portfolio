import { useState } from 'react';
import logo from '../assets/logoo.png';

function Header({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a className="logo" href="#top">
          <img src={logo} alt="Logo" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="toggle-dot"></span>
            <span className="toggle-label">{theme === 'light' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
        <button className="nav-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open navigation">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMobileOpen(false)}>Tech Stack</a>
        <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
      </div>
    </header>
  );
}

export default Header;
