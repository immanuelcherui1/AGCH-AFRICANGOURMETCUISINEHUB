// Login.js
import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login with:', email, password);

        // Clear authentication tokens or user information from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirect to the home page
        window.location.href = '/'; // Redirect to the home page
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" styles="background-color=green">Login</button>
            </form>
        </div>
    );
}

export default Login;