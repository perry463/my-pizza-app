import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScroll > lastScroll && currentScroll > 10) {
            setShowHeader(false); // scrolling down → hide
          } else if (currentScroll < lastScroll) {
            setShowHeader(true); // scrolling up → show
          }
          setLastScroll(currentScroll);
          ticking = false;
        });
        ticking = true;
      }
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);
  // This function closes the menu
const handleLinkClick = () => {
  if (menuOpen) setMenuOpen(false);
};

  return (
    <header className={`header ${showHeader ? 'show' : 'hide'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h1>PerrySlice</h1>
        </div>

        <button className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick} >Home</Link></li>
          <li><Link to="/services" onClick={handleLinkClick} >Services</Link></li>
          <li><Link to="/about"onClick={handleLinkClick} >About Us</Link></li>
          <li>
            <Link to="/cart" onClick={handleLinkClick}>
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>} Cart
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
