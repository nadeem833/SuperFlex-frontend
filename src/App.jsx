import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage';
import Layout from './pages/Layout';
import RequireAuth from './pages/RequireAuth';
import ResetPassword from './pages/ResetPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} /> */}

        {/* Private Routes */}
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
