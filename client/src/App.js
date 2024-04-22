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
  );
}

export default App;
