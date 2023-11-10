import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminDashboard from './pages/AdminDashboard';
import Arrived from './pages/Arrived';
import AvailableNow from './pages/AvailableNow';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import DislikedOffers from './pages/DislikedOffers';
import Error from './pages/Error';
import FAQs from './pages/FAQs';
import Filter from './pages/Filter';
import GoneOffers from './pages/GoneOffers';
import Invites from './pages/Invites';
import LandingPage from './pages/LandingPage';
import Layout from './pages/Layout';
import MyCalendar from './pages/MyCalendar';
import PayNow from './pages/PayNow';
import RequireAuth from './pages/RequireAuth';
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
            <Route path="/dashboard/gone-offers" element={<GoneOffers />} />
            <Route
              path="/dashboard/disliked-offers"
              element={<DislikedOffers />}
            />
            <Route path="/pay-now" element={<PayNow />} />
            <Route path="/pay-now/invites" element={<Invites />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/my-calendar" element={<MyCalendar />} />
            <Route path="/user-arrived" element={<Arrived />} />
            <Route path="/available" element={<AvailableNow />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
