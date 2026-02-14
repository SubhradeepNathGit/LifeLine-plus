import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Contact from '@/pages/Contact'
import Appoinment from '@/pages/Appoinment'
import Department from '@/pages/Department'
import Doctor from '@/pages/Doctor'
import DepartmentSingle from '@/pages/DepartmentSingle'
import DoctorSingle from '@/pages/DoctorSingle'
import BlogSidebar from '@/pages/BlogSidebar'
import BlogSingle from '@/pages/BlogSingle'
import Login from '@/features/auth/pages/Login'
import Signup from '@/features/auth/pages/Signup'
import VerifyPending from '@/features/auth/pages/VerifyPending'
import UserDashboard from '@/features/dashboard/pages/UserDashboard'
import DoctorDashboard from '@/features/dashboard/pages/DoctorDashboard'
import PatientProfile from '@/features/dashboard/pages/PatientProfile'
import DoctorProfile from '@/features/dashboard/pages/DoctorProfile'
import AdminDashboard from '@/features/admin/pages/Dashboard'
import VerifyOTP from '@/features/auth/pages/VerifyOTP'
import ForgotPassword from '@/features/auth/pages/ForgotPassword'
import ResetPassword from '@/features/auth/pages/ResetPassword'
import EmailSent from '@/features/auth/pages/EmailSent'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appoinment" element={<Appoinment />} />
            <Route path="/department" element={<Department />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/department-single" element={<DepartmentSingle />} />
            <Route path="/doctor-single" element={<DoctorSingle />} />
            <Route path="/blog-sidebar" element={<BlogSidebar />} />
            <Route path="/blog-single" element={<BlogSingle />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-pending" element={<VerifyPending />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/user/profile" element={<PatientProfile />} />
            <Route path="/doctor/profile" element={<DoctorProfile />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* New Auth Routes */}
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/email-sent" element={<EmailSent />} />
            {/* Admin routes will be handled by the server proxy */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
    )
}

export default AppRoutes
