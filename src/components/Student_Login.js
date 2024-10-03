import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Student_Login.css'; // Assuming you have some CSS

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const studentProfile = JSON.parse(localStorage.getItem('studentProfile'));

    if (studentProfile && studentProfile.email === email && studentProfile.password === password) {
      navigate('/student-home');
    } else {
      alert('Invalid email or password!');
    }
  };

  const goToForgotPassword = () => {
    navigate('/forgot-password');  // Navigates to the Forgot Password page
  };

  const goToSignup = () => {
    navigate('/signup');  // Navigates to the Signup page
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Student Login</h2>
        <label>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <label>Password</label>
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>

        {/* Forgot Password and Signup buttons */}
        <div className="login-options">
          <button type="button" onClick={goToForgotPassword} className="option-button">
            Forgot Password
          </button>
          <button type="button" onClick={goToSignup} className="option-button">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
