import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import foodImage1 from "./images/IMG_0547-1024x682-1.jpg";
import foodImage2 from "./images/image2.jpg";
import foodImage3 from "./images/AdobeStock_495509521_Preview.jpeg";
import foodImage4 from "./images/AdobeStock_132231609_Preview.jpeg";
import foodImage5 from "./images/AdobeStock_697786172_Preview.jpeg";
import foodImage6 from "./images/AdobeStock_460571394_Preview.jpeg";
import foodImage7 from "./images/AdobeStock_739953694_Preview.jpeg";
import foodImage8 from "./images/images.jpeg";
import Footer from "./Footer";


function Home() {
  const images = [foodImage1, foodImage2, foodImage3, foodImage4, foodImage5, foodImage6, foodImage7, foodImage8];

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      {/* Slideshow container */}
      <Slide easing="ease" duration={2000} transitionDuration={500} infinite={true} indicators={true} arrows={false} autoplay={true}>
        {images.map((each, index) => (
          <div key={index} className="each-slide" style={{ 'backgroundImage': `url(${each})`, width: '100%', height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Optional overlay or content could go here */}
          </div>
        ))}
      </Slide>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', zIndex: 20, fontSize: '1.3rem', padding: '20px', borderRadius: '15px' }}>
    <h1 style={{ color: 'white' }}>Welcome to Africa Gourmet Cuisine Hub</h1>
    <h3>We have the best recipes for making your favorite food.</h3>
</div>
      {/* Navigation bar positioned on top of the slideshow */}
      {/* <nav className="nav-bar"> */}
   


<nav style={{ position: 'absolute', top: '20px', right: '20px', display: 'inline-block' }}>
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', fontSize: '1.2rem', zIndex: 10 }}>
        <li style={{ margin: '0 20px' }}><a href="/" style={{ color: 'white' }}>Home</a></li>
        <li style={{ margin: '0 20px' }}><a href="/RecipeForm" style={{ color: 'white' }}>Dashboard</a></li>
        <li style={{ margin: '0 20px' }}><a href="/RecipeApp" style={{ color: 'white' }}>Recipe</a></li>
        <li style={{ margin: '0 30px', backgroundColor: 'red', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <a href="/Signup" style={{ color: 'white', padding: '20px 25px' }}>Guest</a>
        </li>
    </ul>
</nav>
     <Footer />
    </div>
    // <Footer />
  );
}

export default Home;