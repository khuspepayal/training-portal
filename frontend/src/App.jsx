import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import CourseSchedule from "./pages/CourseSchedule";

import AddCourse from "./pages/AddCourse";
import AddSchedule from "./pages/AddSchedule";

import ViewStudents from "./pages/ViewStudents";

import StudentProfile from "./pages/StudentProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import MyEnrollments from "./pages/MyEnrollments";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

     <Route
  path="/student-dashboard"
  element={
    <ProtectedRoute
      allowedRole="STUDENT"
    >
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

      <Route
  path="/admin-dashboard"
  element={
    <ProtectedRoute
      allowedRole="ADMIN"
    >
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

     <Route
  path="/course-schedule/:courseId"
  element={
    <ProtectedRoute
      allowedRole="STUDENT"
    >
      <CourseSchedule />
    </ProtectedRoute>
  }
/>

      <Route
  path="/add-course"
  element={
    <ProtectedRoute
      allowedRole="ADMIN"
    >
      <AddCourse />
    </ProtectedRoute>
  }
/>

      <Route
        path="/add-schedule"
        element={
          <ProtectedRoute
            allowedRole="ADMIN"
          >
            <AddSchedule />
          </ProtectedRoute>
        }
      />

      <Route
        path="/view-students"
        element={
          <ProtectedRoute
            allowedRole="ADMIN"
          >
            <ViewStudents />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute
            allowedRole="STUDENT"
          >
            <StudentProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-enrollments"
        element={
          <ProtectedRoute
            allowedRole="STUDENT"
          >
            <MyEnrollments />
          </ProtectedRoute>
        }
      />

    </Routes>

    
  );
}

export default App;