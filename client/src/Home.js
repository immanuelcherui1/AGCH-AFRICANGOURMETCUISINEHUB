import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Footer from './Footer';
import RecipesDisplay from './RecipeDisplay';
import foodImage1 from "./images/IMG_0547-1024x682-1.jpg";
import foodImage2 from "./images/image2.jpg";
import foodImage3 from "./images/AdobeStock_495509521_Preview.jpeg";
import foodImage4 from "./images/AdobeStock_132231609_Preview.jpeg";
import foodImage5 from "./images/AdobeStock_697786172_Preview.jpeg";
import foodImage6 from "./images/AdobeStock_460568325_Preview.jpeg";
import foodImage7 from "./images/AdobeStock_739953694_Preview.jpeg";
import foodImage8 from "./images/images.jpeg";

function Home() {
    const images = [
        foodImage1, foodImage2, foodImage3, foodImage4,
        foodImage5, foodImage6, foodImage7, foodImage8
    ];

    return (
        <div style={{ position: 'relative', width: '100%', height: '600px' }}>
            <Slide easing="ease" duration={2000} transitionDuration={500} infinite={true} indicators={true} arrows={false} autoplay={true}>
                {images.map((each, index) => (
                    <div key={index} className="each-slide" style={{ backgroundImage: `url(${each})`, width: '100%', height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* Optional overlay or content could go here */}
                    </div>
                ))}
            </Slide>

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', zIndex: 20, fontSize: '1.3rem', padding: '20px', borderRadius: '15px' }}>
                <h1>Welcome to Africa Gourmet Cuisine Hub</h1>
                <h3>We have the best recipes for making your favorite food.</h3>
            </div>
            <RecipesDisplay/>
            <Footer />
        </div>
    );
}

export default Home;
