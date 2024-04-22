import axios from 'axios';

const apiUrl = '/recipes'; // Base URL for API requests

export const postRecipe = async (recipeData) => {
    try {
        const response = await axios.post(apiUrl, recipeData);
        console.log('Recipe created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to create recipe:', error);
        throw error; // Re-throw to handle it in the component
    }
}
