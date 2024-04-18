import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Home';  // Assuming this is your top navigation bar
import Footer from './Footer';
import Modal from './Modal';
import Login from './Login.js';
import Signup from './Signup.js';
import './App.css';

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  // Handling modal close events
  const closeLogin = () => setLoginOpen(false);
  const closeSignup = () => setSignupOpen(false);

  return (
    <Router>
      <div className="App">
        {/* Navbar assumed to be the top navigation bar */}
        <Navbar />

        <nav>
          <ul>
            <li>
              {/* Link for Search could be a placeholder or implemented differently */}
              <Link to="/search">Search</Link>
            </li>
            <li>
              {/* Guest option opens modal for both login and signup */}
              <button onClick={() => setLoginOpen(true)}>Guest Login</button>
              <button onClick={() => setSignupOpen(true)}>Guest Signup</button>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Modal isOpen={isLoginOpen} onClose={closeLogin}><Login /></Modal>} />
          <Route path="/signup" element={<Modal isOpen={isSignupOpen} onClose={closeSignup}><Signup /></Modal>} />
          {/* Potentially handling the search route if it's intended to show something */}
          <Route path="/search" element={<div>Search Functionality Placeholder</div>} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
