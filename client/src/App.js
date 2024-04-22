import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import RecipeApp from './RecipeApp';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipeApp" component={RecipeApp} />
      </Routes>
    </Router>
  );
}

export default App;
