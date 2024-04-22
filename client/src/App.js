<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import RecipeApp from './RecipeApp';
import AboutComponent from './About';
import { AuthProvider } from './AuthContext';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeApp/>} />
          <Route path = "/about" element = {<AboutComponent/>}/>
        </Routes>
        
      </AuthProvider>
    </Router>
>>>>>>> 60cd814f60e3821763366aa212205b6d67095708
  );
}

export default App;
