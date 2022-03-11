import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import bitcoin from '../../assets/bitcoin.png'

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img
            className="logo-img"
            width={49}
            height={49}
            alt="Bitcoin"
            src={bitcoin}
          />
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link" title="Home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="mailto:mihajlomaksa9@gmail.com"
            className="nav-link"
            title="About Me"
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <Link
            target="_blank"
            rel="noreferrer"
            to="/Resume.pdf"
            className="nav-link"
            title="Portfolio"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
    <div className="bottom-line nav-bottom-line" />
  </div>
)

export default Navbar
