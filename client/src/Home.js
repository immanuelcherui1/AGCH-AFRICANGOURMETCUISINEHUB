import React, { useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import foodImage1 from "./images/IMG_0547-1024x682-1.jpg";
import foodImage2 from "./images/image2.jpg";
import foodImage3 from "./images/AdobeStock_319447161_Preview.jpeg";
import foodImage4 from "./images/AdobeStock_533000353_Preview.jpeg";
import foodImage5 from "./images/AdobeStock_615243490_Preview.jpeg";

function Home() {
    const images = [foodImage1, foodImage2, foodImage3, foodImage4, foodImage5];
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSearchInput = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      alert('Search submitted for: ' + searchQuery);
    };
  
    return (
      
      <div style={{ position: 'relative', width: '100%', height: '600px' }}>
        <Slide easing="ease" duration={3000} transitionDuration={500} infinite={true} indicators={true} arrows={false} autoplay={true}>
          {images.map((each, index) => (
            <div key={index} className="each-slide" style={{ backgroundImage: `url(${each})`, width: '100%', height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {/* Optional overlay or content could go here */}
            </div>
          ))}
        </Slide>
      
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          // zIndex: 20,
          fontSize: '1.3rem',
          padding: '20px',
          borderRadius: '15px'
        }}>
          <h1>Welcome to Africa Gourmet Cuisine Hub</h1>
          <h3>We have the best recipes for making your favorite food.</h3>
        </div>
  
        <form style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          // zIndex: 30,
          display: 'flex',
          alignItems: 'center'
        }} onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInput}
            placeholder="Search recipes..."
            style={{ padding: '5px', marginRight: '5px' }}
          />
          <button type="submit" style={{ padding: '5px 10px', marginRight: '5px', background: '#ff0000', color: 'white' }}>Search</button>
          <button type="button" style={{ padding: '5px 10px', background: '#00ff00', color: 'white'}}>Guest</button>
        </form>
  
        <nav style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          display: 'inline-block',
          // zIndex: 10
        }}>
          <ul style={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            fontSize: '1.3rem'
          }}>
            <li style={{ margin: '0 20px', fontSize: '1.3rem' }}><a href="#" style={{ color: 'white', fontSize: '1.3rem' }}>Home</a></li>
            <li style={{ margin: '0 20px', fontSize: '1.3rem' }}><a href="#" style={{ color: 'white', fontSize: '1.3rem' }}>Dashboard</a></li>
            <li style={{ margin: '0 20px', fontSize: '1.3rem' }}><a href="#" style={{ color: 'white', fontSize: '1.3rem' }}>Profile</a></li>
            <li style={{ margin: '0 20px', fontSize: '1.3rem' }}><a href="#" style={{ color: 'white', fontSize: '1.3rem' }}>About</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Home;
  