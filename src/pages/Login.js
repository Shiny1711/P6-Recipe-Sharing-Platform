import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = ({ setUserSession }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isRegister) {
            localStorage.setItem('user', JSON.stringify({ name: formData.name, email: formData.email }));
            alert('Successfully registered!');
            setIsRegister(false);
        } else {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === formData.email && formData.password === 'password') {
                alert('Login Successful!');
                setUserSession(storedUser.name);
                navigate('/');
            } else {
                alert('Invalid Credentials');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>{isRegister ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    {isRegister && (
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    )}
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
                </form>
                <p onClick={() => setIsRegister(!isRegister)} className="toggle-text">
                    {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
                </p>
            </div>
        </div>
    );
};

export default Login;
