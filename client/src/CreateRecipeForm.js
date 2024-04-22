import React, { useState } from 'react';
import { postRecipe } from './AxiosService'; // Import the Axios service

function CreateRecipeForm({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        instructions: '',
        image: '',
        category: '',
        country: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await postRecipe(formData);
            alert('Recipe created successfully!');
            onFormSubmit(); // Call the passed-in function to handle after form submission
        } catch (error) {
            alert('Failed to create recipe!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{
            position: 'fixed', // Use fixed to position relative to the viewport
            top: '50%', // Center vertically
            left: '50%', // Center horizontally
            transform: 'translate(-50%, -50%)', // Adjust to exact center
            width: '300px', // Reasonable width for the form
            padding: '20px',
            fontWeight: 'bolder',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(0,0,0,0.8)', // Background color for visibility
            zIndex: 1000, // High z-index to be on top of other elements
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Subtle shadow for modal-like appearance
        }}>
        
            <label>Title: <input type="text" name="title" value={formData.title} onChange={handleChange} required /></label><br />
            <label>Instructions: <textarea name="instructions" value={formData.instructions} onChange={handleChange} required></textarea></label><br />
            <label>Image URL: <input type="text" name="image" value={formData.image} onChange={handleChange} /></label><br />
            <label>Category: <input type="text" name="category" value={formData.category} onChange={handleChange} /></label><br />
            <label>Country: <input type="text" name="country" value={formData.country} onChange={handleChange} /></label><br />
            <button type="submit">Submit Recipe</button>
            <button type="button" onClick={onFormSubmit}>Cancel</button>
        </form>
    );
}

export default CreateRecipeForm;
