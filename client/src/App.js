import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import Home from './Home';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<RecipeForm />} /> */}
      </Routes>
    </Router>
  );
}

export default App;