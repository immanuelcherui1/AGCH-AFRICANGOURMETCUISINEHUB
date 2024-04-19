import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import imag1 from "./images/AdobeStock_319447161_Preview.jpeg";
import img2 from "./images/AdobeStock_533000353_Preview.jpeg";
import img3 from "./images/AdobeStock_615243490_Preview.jpeg";
import img4 from "./images/AdobeStock_697786172_Preview.jpeg";
import "./Home.css";
// import About from './About';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    const images = [imag1, img2, img3, img4];

    return (
        <div className="home-container">
            <Slide>
                {images.map((img, ind) => (
                    <div key={ind} className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${img})` }}>
                        </div>
                    </div>
                ))}
            </Slide>

            <div className="overlay-content">
                <h1>Welcome to Africa Gourmet Cuisine Hub</h1>
                <h3>We have the best recipes for making your favorite food.</h3>
            </div>

            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/Signup" className="nav-link">Dashboard</a></li>
                    <li className="nav-item"><a href="/About" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="/RecipeForm">Guest</a></li>
                    <li className="nav-item">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit">Search</button>
                        </form>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
