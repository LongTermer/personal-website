import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/Layout/ErrorBoundary/ErrorBoundary";
import Spinner from "./components/Layout/Spinner/Spinner";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="main-container">
      <ErrorBoundary>
        <Suspense fallback={<Spinner />} />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default App;
