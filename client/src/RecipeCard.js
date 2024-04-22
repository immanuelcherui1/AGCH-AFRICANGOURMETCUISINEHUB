import React, { useState } from 'react';

function RecipeCard({ recipe }) {
    const [showFullInstructions, setShowFullInstructions] = useState(false);

    const toggleInstructions = () => setShowFullInstructions(!showFullInstructions);

    // Fallback image URL
    const fallbackImage = "https://th.bing.com/th/id/OIP.DTKDaLKcwGPmKTWBwmLieQHaFO?rs=1&pid=ImgDetMain";

    // Function to handle image load failure
    const handleImageError = (event) => {
        event.target.src = fallbackImage;
    };

    return (
        <div style={{ width: '300px', margin: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{recipe.title}</h3>
            <img 
                src={recipe.image} 
                alt={recipe.title} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                onError={handleImageError} // Handle image load failure
            />
            <p>{showFullInstructions ? recipe.instructions : `${recipe.instructions.substring(0, 100)}...`}</p>
            <button onClick={toggleInstructions}>Read more</button>
            <div>
                <button><i className="fa fa-heart"></i></button>
                <button><i className="fa fa-comment"></i></button>
                <button><i className="fa fa-bookmark"></i></button>
            </div>
        </div>
    );
}

export default RecipeCard;
