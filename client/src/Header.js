import React, { useState } from 'react';
import CreateRecipeForm from './CreateRecipeForm';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const toggleMenu = () => {
        console.log("Toggling menu, current state:", isOpen);
        setIsOpen(!isOpen);
    };

    const toggleFormVisibility = () => {
        console.log("Toggling form, current form state:", showForm);
        setShowForm(!showForm);
    };

    return (
        <header style={{ position: 'relative', width: '100%', backgroundColor: '#333' }}>
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                {/* Guest menu button on the left */}
                <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem' }}>
                    ☰ GUEST
                </button>
                
                {/* Navigation links */}
                <ul style={{ display: 'flex', listStyleType: 'none', flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center', margin: 0, padding: 0, fontSize: '1.2rem' }}>
                    <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</a></li>
                    <li><Link to="/RecipeApp" style={{ color: 'white', textDecoration: 'none' }}>MORE RECIPES</Link></li>
                    <li><a href="/Recipe" style={{ color: 'white', textDecoration: 'none' }}>RECIPE OF THE DAY</a></li>
                    <li><a href="/Signup" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</a></li>
                </ul>
            </nav>

            {/* Toggleable dropdown menu for guest */}
            {isOpen && (
                <ul style={{
                    position: 'absolute', top: '50px', left: '20px', backgroundColor: '#444',
                    listStyleType: 'none', padding: '10px', width: '140px', fontSize: '1.2rem', zIndex: 20, color: 'white'
                }}>
                    <li style={{ padding: '10px 0' }} onClick={toggleFormVisibility}>CREATE RECIPE</li>
                    <li style={{ padding: '10px 0' }}>LOGIN</li>
                    <li style={{ padding: '10px 0' }}>SIGN UP</li>
                    <li style={{ padding: '10px 0' }}>LOGOUT</li>
                </ul>
            )}

            {/* Show form based on state */}
            {showForm && <CreateRecipeForm onFormSubmit={() => setShowForm(false)} />}
        </header>
    );
}

export default Header;
