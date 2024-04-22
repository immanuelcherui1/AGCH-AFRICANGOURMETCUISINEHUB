import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/user/login', { email, password });
            console.log('Login Success:', response.data);
            // Redirect or handle login success
        } catch (err) {
            setError('Invalid email or password');
            console.error('Login Error:', err);
        }
    };

    return (
        <div className="login-form" 
        style={{
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
        }}
        >
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Log In</button>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    );
}

export default LoginForm;
