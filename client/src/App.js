import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Navbar from './Home'; // Assuming Navbar is incorrectly named and should be Home
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navbar component assumed to be a top navigation bar */}
                <Navbar />

                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>

                {/* Footer component */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
