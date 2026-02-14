import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from '@/routes/AppRoutes'
import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Router>
                    <AppRoutes />
                    <ToastContainer />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
