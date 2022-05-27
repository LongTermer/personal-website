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
          <a href="mailto:mihajlomaksa9@gmail.com" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mihailo-maksa"
            className="nav-link"
          >
            Github
          </a>
        </li>
        <li className="nav-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/Resume.pdf"
            className="nav-link"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
    <div className="bottom-line nav-bottom-line" />
  </div>
)

export default Navbar
