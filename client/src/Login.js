// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/login', {
                email: email,
                password: password
            });
            console.log('Login response:', response.data);
            // Redirect to dashboard after successful login
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Login error:', error.response.data);
            setErrorMessage(error.response.data.error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </form>
        </div>
    );
}

export default Login;