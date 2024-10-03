import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Assuming you have some CSS for styling

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [mentor, setMentor] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    if (password !== retypePassword) {
      alert('Passwords do not match!');
      return;
    }

    const studentProfile = {
      name,
      email,
      dob,
      phone,
      mentor,
      password
    };

    // Store student profile data in localStorage
    localStorage.setItem('studentProfile', JSON.stringify(studentProfile));

    // Redirect to login page after successful signup
    navigate('/');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>

        <label>Name</label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Date of Birth</label>
        <input 
          type="date" 
          value={dob} 
          onChange={(e) => setDob(e.target.value)} 
          required 
        />

        <label>Phone Number</label>
        <input 
          type="tel" 
          placeholder="Enter your phone number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />

        <label>Select Mentor</label>
        <select value={mentor} onChange={(e) => setMentor(e.target.value)} required>
          <option value="" disabled>Select a mentor</option>
          <option value="J. SURYA KIRAN">J. SURYA KIRAN</option>
          <option value="R.M. BALAJEE">R.M. BALAJEE</option>
          <option value="P.V. VARA PRASAD">P.V. VARA PRASAD</option>
          <option value="DINESH KUMAR ANGURAJ">DINESH KUMAR ANGURAJ</option>
          <option value="MOHAMMAD GOUSE">MOHAMMAD GOUSE</option>
          <option value="CHITTIBABU RAVELA">CHITTIBABU RAVELA</option>
          <option value="DR. G RAMA KOTESWARA RAO">DR. G RAMA KOTESWARA RAO</option>
          <option value="TALLURI JYOTHI">TALLURI JYOTHI</option>
          <option value="DR.ANITHA PRADHAN">DR.ANITHA PRADHAN</option>
          <option value="CH LAVANYA SUSANNA">CH LAVANYA SUSANNA</option>
          <option value="B. SUNEETHA">B. SUNEETHA</option>

        </select>

        <label>Password</label>
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <label>Re-type Password</label>
        <input 
          type="password" 
          placeholder="Re-type your password" 
          value={retypePassword} 
          onChange={(e) => setRetypePassword(e.target.value)} 
          required 
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
