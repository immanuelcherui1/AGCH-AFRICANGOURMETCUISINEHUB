import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import Home from './Home';
import Footer from './Footer';
import Login from './Login'; // Import Login
import Signup from './Signup'; // Import Signup
import RecipeApp from './RecipeApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipeForm" element={<RecipeForm />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />   // Add Login route
        <Route path="/signup" element={<Signup />} /> // Add Signup route
        <Route path="/RecipeApp" element={<RecipeApp />} /> // Add RecipeApp route
      </Routes>
    </Router>
  );
}

export default App;
