import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ErrorBoundary from './components/Layout/ErrorBoundary/ErrorBoundary'
import Spinner from './components/Layout/Spinner/Spinner'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import IntroAnimation from './components/Layout/IntroAnimation/IntroAnimation'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Interests from './components/Interests/Interests'
import NotFound from './components/Layout/NotFound/NotFound'

const HomePage = () => {
  return (
    <>
      <IntroAnimation />
      <div className="mid-container">
        <About />
        <Projects />
        <Interests />
      </div>
    </>
  )
}

const App = () => {
  return (
    <HashRouter>
      <div className="main-container">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} />
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </ErrorBoundary>
      </div>
    </HashRouter>
  )
}

export default App
