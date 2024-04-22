import axios from 'axios';

// Base URL for API requests related to recipes
const recipeApiUrl = '/recipes';
const userApiUrl = '/user';  // Base URL for user-related API requests

export const postRecipe = async (recipeData) => {
    try {
        const response = await axios.post(recipeApiUrl, recipeData);
        console.log('Recipe created:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to create recipe:', error);
        throw error; // Re-throw to handle it in the component
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${userApiUrl}/login`, userData);
        console.log('Logged in successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Login failed:', error.response.data.message);
        throw error; // Re-throw to handle it in the component
    }
};

export const signupUser = async (userData) => {
    try {
        const response = await axios.post(`${userApiUrl}/signup`, userData);
        console.log('User created successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Signup failed:', error.response.data.message);
        throw error; // Re-throw to handle it in the component
    }
};

export const logoutUser = async () => {
    try {
        const response = await axios.post(`${userApiUrl}/logout`);
        console.log('Logged out successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Logout failed:', error);
        throw error; // Re-throw to handle it in the component
    }
};
