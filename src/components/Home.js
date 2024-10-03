// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Assignment Management System</h1>
      <p>
        Welcome to the Assignment Management System. This platform allows students to submit assignments and mentors to review and grade them efficiently.
      </p>

      <div className="features-container">
        <h2>Project Features & Functions</h2>
        <ul className="feature-list">
          <li>Student Login: Secure login for students to access their assignments and submission status.</li>
          <li>Mentor Login: Mentors can log in to view student submissions, provide feedback, and assign grades.</li>
          <li>Assignment Submission: Students can upload their assignments directly on the platform.</li>
          <li>Assignment Review: Mentors can review, comment, and grade student assignments.</li>
          <li>Progress Tracking: Students can track the status of their submitted assignments and view feedback.</li>
          <li>Forgot Password: Password recovery functionality for students and mentors.</li>
          <li>Sign Up: New users can create accounts as students or mentors.</li>
        </ul>
      </div>

      <div className="login-links">
        <Link to="/student-login" className="login-button">Student Login</Link>
        <Link to="/mentor-login" className="login-button">Mentor Login</Link>
      </div>
    </div>
  );
}

export default Home;
