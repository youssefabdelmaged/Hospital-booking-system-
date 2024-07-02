/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import LoginContainer from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";
import ForgotPassword from "./components/forgot-password";
import Home from "./components/home";
//blog
import BlogList from "./components/blog/bloglist";
import BlogGrid from "./components/blog/bloggrid";
import BlogDetails from "./components/blog/blogdetails";
//pages
import Components from "./components/pages/component";
import BlankPage from "./components/pages/blankpage";
import VideoCall from "./components/pages/videocall";
import VoiceCall from "./components/pages/voicecall";
import SearchDoctor from "./components/pages/searchdoctor";
import Calendar from "./components/pages/calender";
import Invoice from "./components/pages/invoices/invoices";
import InvoiceView from "./components/pages/invoices/view";
import DoctorGrid from "./components/patients/doctorgrid";
import DoctorList from "./components/patients/doctorlist";
import DoctorProfile from "./components/patients/doctorprofile";
import DoctorChat from "./components/doctors/chat";
import PatientChat from "./components/patients/chat";
import MyPatient from "./components/doctors/mypatient";
import Booking from "./components/patients/booking";
import Checkout from "./components/patients/checkout";
import BookingSuccess from "./components/patients/booking-success";
import Dashboard from "./components/patients/dashboard";
import Favourties from "./components/patients/dashboard/favourties";
import Profile from "./components/patients/dashboard/profile";
import Password from "./components/patients/dashboard/password";
import DoctorDashboard from "./components/doctors/dashboard";
import SocialMedia from "./components/doctors/socialmedia";
import ScheduleTiming from "./components/doctors/scheduletimings";
import DoctorPassword from "./components/doctors/password";
import Appointments from "./components/doctors/appointments";
import PatientProfile from "./components/doctors/patientprofile";
import AddPescription from "./components/doctors/addpescription";
import AddBilling from "./components/doctors/addbilling";
import ProfileSetting from "./components/doctors/profilesetting";
import Review from "./components/doctors/reviews";
import DoctorRegister from "./components/doctors/register";
import Terms from "./components/pages/terms";
import Policy from "./components/pages/policy";
// admin
import SideMenu from "./components/admin/menu/menu";
import Dropzone from "./components/doctors/profilesetting/dropimage";
import Booking2 from "./components/patients/booking/booking2.jsx";

const ClientAppUniversal = function (props) {
  return (
    <BrowserRouter>
      <div>
        {/* <Route path="/join" exact component={Dropzone} /> */}
        <Route path="/sider-menu" exact component={SideMenu} />
        <Route render={(props) => <Header {...props} />} />
        <Routes>
          <Route path="/patient/doctor-grid" element={<DoctorGrid />} />
          <Route path="/patient/doctor-list" element={<DoctorList />} />
          <Route path="/pages/video-call" element={<VideoCall />} />
          <Route path="/pages/component" element={<Components />} />
          <Route path="/pages/voice-call" element={<VoiceCall />} />
          <Route path="/doctor/chat-doctor" element={<DoctorChat />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/index-2" element={<Home />} />

          {/* blog */}
          <Route path="/blog/blog-grid" element={<BlogGrid />} />
          <Route path="/blog/blog-details" element={<BlogDetails />} />

          {/* pages */}
          <Route path="/pages/calendar" element={<Calendar />} />
          <Route path="/pages/invoice" element={<Invoice />} />
          <Route path="/doctor/invoice-view" element={<InvoiceView />} />

          <Route path="/patient/doctor-profile" element={<DoctorProfile />} />
          <Route path="/doctor/my-patients" element={<MyPatient />} />
          <Route path="/patient/booking/booking2" element={<Booking2 />} />

          <Route path="/patient/patient-chat" element={<PatientChat />} />
          <Route path="/patient/checkout" element={<Checkout />} />
          <Route path="/patient/booking-success" element={<BookingSuccess />} />
          <Route path="/patient/dashboard" element={<Dashboard />} />
          <Route path="/patient/favourites" element={<Favourties />} />
          <Route path="/patient/profile" element={<Profile />} />
          <Route path="/patient/change-password" element={<Password />} />

          <Route
            path="/doctor/doctor-dashboard"
            element={<DoctorDashboard />}
          />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/doctor/schedule-timing" element={<ScheduleTiming />} />
          <Route path="/doctor-change-password" element={<DoctorPassword />} />
          <Route path="/doctor/appointments" element={<Appointments />} />
          <Route path="/doctor/patient-profile" element={<PatientProfile />} />
          <Route path="/add-prescription" element={<AddPescription />} />
          <Route path="/add-billing" element={<AddBilling />} />
          <Route path="/doctor/profile-setting" element={<ProfileSetting />} />
          <Route path="/doctor/review" element={<Review />} />
          <Route path="/doctor/doctor-register" element={<DoctorRegister />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Policy />} />
        </Routes>
        <Route render={(props) => <Footer {...props} />} />
      </div>
    </BrowserRouter>
  );
};

export default ClientAppUniversal;
