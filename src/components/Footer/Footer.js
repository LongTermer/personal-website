import React from 'react'
import './footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

const Footer = () => (
  <div className="footer">
    <a href="mailto:mihajlomaksa9@gmail.com" className="email-link">
      <EmailIcon />
    </a>
    <a
      href="https://github.com/mihailo-maksa"
      className="github-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon />
    </a>
    <br />
    <p className="copyright">
      Made By{' '}
      <a
        href="https://github.com/mihailo-maksa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="author">Mihailo Maksa</span>
      </a>{' '}
      &copy; {new Date().getFullYear()}
    </p>
  </div>
)

export default Footer
