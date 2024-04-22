import React, { useState } from 'react';
import CreateRecipeForm from './CreateRecipeForm';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(null); // Changed default state to null

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleFormVisibility = (formType) => { // Modified to accept formType
        setShowForm(formType === showForm ? null : formType); // Toggles visibility of the clicked form
    };

    const handleLogout = () => {
        // Implement logout functionality
    };

    return (
        <header style={{ position: 'relative', width: '100%', backgroundColor: '#333' }}>
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem' }}>
                    GUEST
                </button>
                
                <ul style={{ display: 'flex', listStyleType: 'none', flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center', margin: 0, padding: 0, fontSize: '1.2rem' }}>
                    <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</a></li>
                    <li><Link to="/RecipeApp" style={{ color: 'white', textDecoration: 'none' }}>MORE RECIPES</Link></li>
                    <li><a href="/Recipe" style={{ color: 'white', textDecoration: 'none' }}>RECIPE OF THE DAY</a></li>
                    <li><a href="/Signup" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</a></li>
                </ul>
            </nav>

            {isOpen && (
                <ul style={{
                    position: 'absolute', top: '50px', left: '20px', backgroundColor: '#444',
                    listStyleType: 'none', padding: '10px', width: '140px', fontSize: '1.2rem', zIndex: 20, color: 'white'
                }}>
                    <li style={{ padding: '10px 0' }} onClick={() => toggleFormVisibility('create')}>CREATE RECIPE</li>
                    <li style={{ padding: '10px 0' }} onClick={() => toggleFormVisibility('login')}>LOGIN</li>
                    <li style={{ padding: '10px 0' }} onClick={() => toggleFormVisibility('signup')}>SIGN UP</li>
                </ul>
            )}

            {showForm === 'create' && <CreateRecipeForm onFormSubmit={() => setShowForm(null)} />}
            {showForm === 'login' && <LoginForm onFormSubmit={() => setShowForm(null)} />}
            {showForm === 'signup' && <SignupForm onFormSubmit={() => setShowForm(null)} />}
        </header>
    );
}

export default Header;
