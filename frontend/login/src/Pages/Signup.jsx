import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            console.log("Username:", username); // Debugging log
            console.log("Password:", password);
            const response = await fetch(`http://localhost:5000/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                navigate('/login');
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h1>SignUp Page</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleClick}>
                    SignUp
                </button>
            </form>
        </div>
    );
};

export default Signup;
