// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StudentLogin from './components/Student_Login';
import MentorLogin from './components/Mentor_Login';
import ForgotPassword from './components/Forgot_Password';
import Signup from './components/Signup';
import StudentHome from './components/StudentHome';
import StudentDashboard from './components/StudentDashboard';
import ActivityList from './components/ActivityList';
import ProjectSubmission from './components/ProjectSubmission';
import Notifications from './components/Notifications';
import MentorHome from './components/MentorHome';
import MentorDashboard from './components/MentorDashboard';
import MentorProjects from './components/MentorProjects';
import MentorStudentsList from './components/MentorStudentsList';
import MentorSubmissions from './components/MentorSubmissions';
import MentorNotifications from './components/MentorNotifications';
import MentorMilestones from './components/MentorMilestones';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/activity-list" element={<ActivityList />} />
        <Route path="/project-submission" element={<ProjectSubmission />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/mentor-home" element={<MentorHome />} />
        <Route path="/dashboard" element={<MentorDashboard />} />
        <Route path="/projects" element={<MentorProjects />} />
        <Route path="/students-list" element={<MentorStudentsList />} />
        <Route path="/submissions" element={<MentorSubmissions />} />
        <Route path="/notifications" element={<MentorNotifications />} />
        <Route path="/milestones" element={<MentorMilestones />} />
      </Routes>
    </Router>
  );
}

export default App;
