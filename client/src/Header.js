import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import CreateRecipeForm from './CreateRecipeForm';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function Header() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleFormVisibility = (formType) => {
        setShowForm(formType === showForm ? null : formType);
    };

    return (
        <header style={{ position: 'relative', width: '100%', backgroundColor: '#333' }}>
            <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
                <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem' }}>
                    ☰ 
                </button>
                <h2 style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem' }}>
                    {user ? user : 'GUEST'}
                </h2>
                <ul style={{ display: 'flex', listStyleType: 'none', flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center', margin: 0, padding: 0, fontSize: '1.2rem' }}>
                    <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>HOME</Link></li>
                    <li><Link to="/recipes" style={{ color: 'white', textDecoration: 'none' }}>MORE RECIPES</Link></li>
                    <li><Link to="/recipe" style={{ color: 'white', textDecoration: 'none' }}>RECIPE OF THE DAY</Link></li>
                    <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</Link></li>
                </ul>
            </nav>

            {/* Dropdown for form links */}
            {isOpen && (
                <ul style={{
                    position: 'absolute', top: '50px', left: '20px', backgroundColor: '#333',
                    listStyleType: 'none', padding: '10px', width: '140px', fontSize: '1.2rem', zIndex: 20, color: 'white'
                }}>
                    <li onClick={() => toggleFormVisibility('create')}>CREATE RECIPE</li>
                    <li onClick={() => toggleFormVisibility('login')}>LOGIN</li>
                    <li onClick={() => toggleFormVisibility('signup')}>SIGN UP</li>
                </ul>
            )}

            {/* Conditionally rendered forms */}
            {showForm === 'create' && <CreateRecipeForm onFormSubmit={() => setShowForm(null)} />}
            {showForm === 'login' && <LoginForm onFormSubmit={() => setShowForm(null)} />}
            {showForm === 'signup' && <SignupForm onFormSubmit={() => setShowForm(null)} />}
        </header>
    );
}

export default Header;
