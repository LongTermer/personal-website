import React from 'react'
import './error.css'

export default class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasErrored: false,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-boundary">
          <img
            src="https://i.imgur.com/yW2W9SC.png"
            alt="Page is broken"
            width={200}
            height={200}
            className="broken-page-img"
          />
          <h1 className="error-title">
            <i
              className="fas fa-exclamation-triangle"
              style={{ color: '#e84142' }}
            />{' '}
            Sorry, this page is broken!
          </h1>
          <h2 className="error-subtitle">
            Make sure you entered the right URL!
          </h2>
        </div>
      )
    }

    return this.props.children
  }
}
