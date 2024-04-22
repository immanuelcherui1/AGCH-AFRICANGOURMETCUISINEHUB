import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false); // New state variable

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/user/signup', { name, email, password });
            console.log('Signup Success:', response.data);
            setIsSuccess(true); // Update state to indicate success
        } catch (err) {
            setError('User already exists or invalid data');
            console.error('Signup Error:', err);
        }
    };

    // Render success message if isSuccess is true
    if (isSuccess) {
        return (
            <div 
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
                <h2>Account created successfully!</h2>
                <p>Now Login</p>
            </div>
        );
    }

    // Render form otherwise
    return (
        <div className="signup-form"
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
            <h2>Sign Up</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </form>
        </div>
    );
}

export default SignupForm;
