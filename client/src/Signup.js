import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState(''); // I've also adjusted the naming to follow camelCase convention

    const handleSignup = (event) => {
        event.preventDefault();
        console.log('Signup with:', userName, email, password);
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <div className="input-group">
                    <label>Username</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <a href="/Login">Login</a></p>
            </form>
        </div>
    );
}

export default Signup;
