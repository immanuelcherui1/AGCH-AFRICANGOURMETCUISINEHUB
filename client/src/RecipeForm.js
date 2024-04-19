import React, { useState } from 'react';
import axios from 'axios';
import './recipeForm.css'; // Ensure this path is correct

function RecipeForm() {
    const [formData, setFormData] = useState({
        title: '',
        instructions: '',
        category: '',
        country: '',
        image: null
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });

        try {
            const response = await axios.post('http://localhost:5000/api/recipes', data);
            console.log('Response:', response.data);
            alert('Recipe submitted successfully!');
        } catch (error) {
            console.error('Error posting recipe:', error);
            alert('Failed to submit recipe: ' + (error.response?.data.message || error.message));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:
                <input id="title" type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label htmlFor="instructions">Instructions:
                <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} required />
            </label>
            <label htmlFor="category">Category:
                <input id="category" type="text" name="category" value={formData.category} onChange={handleChange} required />
            </label>
            <label htmlFor="country">Country:
                <input id="country" type="text" name="country" value={formData.country} onChange={handleChange} required />
            </label>
            <label htmlFor="image">Image:
                <input id="image" type="file" name="image" onChange={handleChange} />
            </label>
            <button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit Recipe'}</button>
        </form>
    );
}

export default RecipeForm;