import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeForm from './RecipeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeForm />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;