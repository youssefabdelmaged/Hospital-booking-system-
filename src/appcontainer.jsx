/* eslint-disable react/prop-types */
// Routes
import React, { useEffect } from "react";
import config from "config";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
// import Header from "./client/components/header.jsx";
// import Footer from "./client/components/footer.jsx";
// import TopHeader from "./client/components/topheader.jsx";
import LoginContainer from "./client/components/login/login.jsx";
import Register from "./client/components/register/register.jsx";
import ForgotPassword from "./client/components/forgot-password";
import Home from "./client/components/home/index";

import HomeSlider1 from "./client/components/home/homeslider1";
import HomeSlider2 from "./client/components/home/homeslider2";

//blog
import BlogGrid from "./client/components/blog/bloggrid";
import BlogDetails from "./client/components/blog/blogdetails";
//pages
import VideoCall from "./client/components/pages/videocall";
import VoiceCall from "./client/components/pages/voicecall";
import SearchDoctor from "./client/components/pages/searchdoctor/search-doctor1";
import Components from "./client/components/pages/component";
import Calendar from "./client/components/pages/calender";
import Invoice from "./client/components/pages/invoices/invoices";
import InvoiceView from "./client/components/pages/invoices/view";
import DoctorGrid from "./client/components/patients/doctorgrid";
import DoctorList from "./client/components/patients/doctorlist";
import DoctorProfile from "./client/components/patients/doctorprofile";
import DoctorChat from "./client/components/doctors/chat";
import PatientChat from "./client/components/patients/chat";
import MyPatient from "./client/components/doctors/mypatient";
import Booking from "./client/components/patients/booking/booking1";
import Booking2 from "./client/components/patients/booking/booking2";

import Checkout from "./client/components/patients/checkout";
import BookingSuccess from "./client/components/patients/booking-success";
import Dashboard from "./client/components/patients/dashboard";
import PatientDependent from "./client/components/patients/dependent";
import PatientAccounts from "./client/components/patients/accounts";
import Orders from "./client/components/patients/orders";
import MedicalRecords from "./client/components/patients/medicalrecords";
import MedicalDetails from "./client/components/patients/medicaldetails";
import Favourties from "./client/components/patients/dashboard/favourties";
import Profile from "./client/components/patients/dashboard/profile";
import Password from "./client/components/patients/dashboard/password";
import DoctorDashboard from "./client/components/doctors/dashboard";
import SocialMedia from "./client/components/doctors/socialmedia";
import ScheduleTiming from "./client/components/doctors/scheduletimings";
import DoctorPassword from "./client/components/doctors/password";
import Appointments from "./client/components/doctors/appointments";
import PatientProfile from "./client/components/doctors/patientprofile";
import AddPescription from "./client/components/doctors/addpescription";
import AddBilling from "./client/components/doctors/addbilling";
import ProfileSetting from "./client/components/doctors/profilesetting";
import Review from "./client/components/doctors/reviews";
import DoctorRegister from "./client/components/doctors/register";
import Registerstepone from "./client/components/doctors/register/registerstepone";
import Registersteptwo from "./client/components/doctors/register/registersteptwo";
import Registerstepthree from "./client/components/doctors/register/registerstepthree";
import Terms from "./client/components/pages/terms";
import Policy from "./client/components/pages/policy";
import Aboutus from "./client/components/pages/aboutus/aboutus";
import Contactus from "./client/components/pages/contactus/contactus";
import Patientregisterstepone from "./client/components/register/patientregisterstepone";
import Patientregistersteptwo from "./client/components/register/patientregistersteptwo";
import Patientregisterstepthree from "./client/components/register/patientregisterstepthree";
import Patientregisterstepfour from "./client/components/register/patientregisterstepfour";
import Patientregisterstepfive from "./client/components/register/patientregisterstepfive";
//pharmacy
// import Pharmacy from "./client/components/Pharmacy/pharmacy";
// import pharmacydetail from "./client/components/Pharmacy/pharmactdetail";
// import PharmacySearch from "./client/components/Pharmacy/pharmacysearch";
// import Cart from "./client/components/Pharmacy/cart";
// import Product from "./client/components/Pharmacy/product";
// import ProductDescription from "./client/components/Pharmacy/productdescription";
// import ProductCheckout from "./client/components/Pharmacy/productcheckout";
// import PayoutSuccess from "./client/components/Pharmacy/payoutsuccess";
import AppUniversal from "./admin/app-universal";
import BlankPage from "./client/components/pages/starter page/index.jsx";
// // import Pharmacyregister from "./client/components/Pharmacy/pharmacyregister";
// import Pharmacyregisterstepone from "./client/components/Pharmacy/pharmacyregisterstepone";
// import Pharmacyregistersteptwo from "./client/components/Pharmacy/pharmacyregistersteptwo";
// import Pharmacyregisterstepthree from "./client/components/Pharmacy/pharmacyregisterstepthree";
import Doctorblog from "./client/components/blog/doctorblog/doctorblog";
import Doctoraddblog from "./client/components/blog/doctorblog/doctoraddblog";
import DoctorPendingBlog from "./client/components/blog/doctorblog/doctorpendingblog";
import Doctoreditblog from "./client/components/blog/doctorblog/doctoreditblog";
import EditPrescription from "./client/components/doctors/patientprofile/edit-prescription";
import EditBilling from "./client/components/doctors/editbilling/index";
import MapList from "./client/components/patients/map-list/index";
import OnboardingEmail from "./client/components/pages/doctoronboarding/onboardingemail";
import OnboardingPersonalize from "./client/components/pages/doctoronboarding/onboardingpersonalize";
import OnboardingIdentity from "./client/components/pages/doctoronboarding/onboardingidentity";
import OnboardingPayments from "./client/components/pages/doctoronboarding/onboardingpayments";
// import onboardingpersonalize from "./client/components/pages/doctoronboarding/onboardingpayments";
import OnboardingPreferences from "./client/components/pages/doctoronboarding/onboardingpreferences";
import Onboardingverification from "./client/components/pages/doctoronboarding/onboardingverification";
import PatientOnboardingEmail from "./client/components/pages/patientonboarding/Email";
import PatientOnboardingPersonalize from "./client/components/pages/patientonboarding/Personalize";
import PatientOnboardingDetails from "./client/components/pages/patientonboarding/Details";
import PatientFamilyDetails from "./client/components/pages/patientonboarding/FamilyDetails";
import DependantDetails from "./client/components/pages/patientonboarding/DependantDetails";
import OtherDetails from "./client/components/pages/patientonboarding/OtherDetails";
import OnboardingEmailOtp from "./client/components/pages/doctoronboarding/onboardingemail-otp";
import Onboardingphone from "./client/components/pages/doctoronboarding/onboardingphone";
import Onboardingphoneotp from "./client/components/pages/doctoronboarding/onboardingphoneotp";
import Onboardingpassword from "./client/components/pages/doctoronboarding/onboardingpassword";
import PatientEmailOtp from "./client/components/pages/patientonboarding/PatientEmailOtp";
import PatientPhone from "./client/components/pages/patientonboarding/Patientphone";
import patientphoneotp from "./client/components/pages/patientonboarding/patientphoneotp";
import patientpassword from "./client/components/pages/patientonboarding/patientpassword";
import PhoneOtp from "./client/components/pages/patientonboarding/phoneotp";
import Producthealthcare from "./client/components/pages/producthealthcare/index";
import Generalhome from "./client/components/home/general/generalhome.jsx";
import Comingsoon from "./client/components/pages/coming soon/index.jsx";
import Maintenance from "./client/components/pages/maintanence/index.jsx";
import PricingPlan from "./client/components/pages/pricing plan/index.jsx";
import Error404 from "./client/components/pages/error/Error404.jsx";
import Error500 from "./client/components/pages/error/Error500.jsx";
import LoginEmail from "./client/components/pages/authentication/login-email.jsx";
import LoginPhone from "./client/components/pages/authentication/login-phone.jsx";
import LoginEmailOtp from "./client/components/pages/authentication/login-email-otp.jsx";
import LoginPhoneOtp from "./client/components/pages/authentication/login-phone-otp.jsx";
import ForgotPassword2 from "./client/components/pages/authentication/forgot-password2.jsx";
import PatientSignup from "./client/components/pages/authentication/patient-signup.jsx";
import Signup from "./client/components/pages/authentication/signup.jsx";
import SuccessSignup from "./client/components/pages/authentication/success-signup.jsx";
import DoctorSignup from "./client/components/pages/authentication/doctor-signup.jsx";
import Faq from "./client/components/pages/faq/index.jsx";
import EmailOtp from "./client/components/pages/authentication/email-otp.jsx";
import MobileOtp from "./client/components/pages/authentication/phone-otp.jsx";
import AvailableTiming from "./client/components/doctors/availabletiming/index.jsx";
import Accounts from "./client/components/doctors/account/index.jsx";
import Cardiohome from "./client/components/home/cardiology/cardiohome.jsx";
import Paediatrichome from "./client/components/home/paediatric/paediatrichome.jsx";
import SearchDoctor2 from "./client/components/pages/searchdoctor/search-doctor2.jsx";
import Consultation from "./client/components/home/consultation.jsx";
import Payment from "./client/components/home/payment.jsx";
import Bookingsuccess from "./client/components/home/bookingsuccess.jsx";
import Patientdetails from "./client/components/home/patientdetails.jsx";
import Loginemail from "./client/components/home/loginemail.jsx";
import HomecareHome from "./client/components/home/HomecareHome/index.jsx";
import Favourites from "./client/components/patients/dashboard/favourties";

import AdminDashboard from "./admin/components/dashboard"; 
import AdminAppointments from "./admin/components/appointments"






const AppContainer = function (props) {
  const location = useLocation();
  console.log(location.pathname);
  const { pathname } = location;
  const url = pathname.split("/")[1];

  // const config = "/react/template/";
  if (props) {
    useEffect(() => {
      const handleMouseMove = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorOuter) {
          cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }

        if (cursorInner) {
          cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }
      };

      const handleMouseEnter = () => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorInner) {
          cursorInner.classList.add("s");
        }

        if (cursorOuter) {
          cursorOuter.classList.add("s");
        }
      };

      const handleMouseLeave = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (
          event.target.tagName !== "A" ||
          !event.target.closest(".cursor-pointer")
        ) {
          if (cursorInner) {
            cursorInner.classList.remove("cursor-hover");
          }

          if (cursorOuter) {
            cursorOuter.classList.remove("cursor-hover");
          }
        }
      };

      document.body.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);

      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorInner) {
        cursorInner.style.visibility = "visible";
      }

      if (cursorOuter) {
        cursorOuter.style.visibility = "visible";
      }

      return () => {
        document.body.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <div>
        {url === "admin" ? (
          <div>
            <Routes>
              <Route
                path="/admin/*"
                element={
                  <>
                    <AdminDashboard />
                    <AppUniversal />
                  </>
                }
              />

<Route path="/admin/appointment-list" element={<AdminAppointments />} />

            </Routes>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/index" element={<Generalhome />} />

              <Route path="/patient/doctor-grid" element={<DoctorGrid />} />
              <Route path="/patient/doctor-list" element={<DoctorList />} />
              <Route path="/pages/video-call" element={<VideoCall />} />
              <Route path="/pages/voice-call" element={<VoiceCall />} />
              <Route path="/doctor/chat-doctor" element={<DoctorChat />} />

              <Route path="/login" element={<LoginContainer />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/pages/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/pages/forgot-password2"
                element={<ForgotPassword2 />}
              />
              <Route path="/pages/login-email" element={<LoginEmail />} />
              <Route path="/pages/login-phone" element={<LoginPhone />} />
              <Route path="/pages/email-otp" element={<LoginEmailOtp />} />
              <Route path="/pages/phone-otp" element={<LoginPhoneOtp />} />
              <Route path="/pages/eotp" element={<EmailOtp />} />
              <Route path="/pages/motp" element={<MobileOtp />} />

              <Route path="/pages/patient-signup" element={<PatientSignup />} />
              <Route path="/pages/doctor-signup" element={<DoctorSignup />} />
              <Route path="/success-signup" element={<SuccessSignup />} />
              <Route path="/signup" element={<Signup />} />

              {/* home */}
              <Route path="/index" element={<Generalhome />} />
              <Route path="/homeslider1" element={<HomeSlider1 />} />
              <Route path="/homeslider2" element={<HomeSlider2 />} />

              {/* blog */}
              <Route path="/blog/blog-grid" element={<BlogGrid />} />
              <Route path="/blog/blog-details" element={<BlogDetails />} />
              <Route path="/doctor-blog" element={<Doctorblog />} />
              <Route path="/blog/doctor-add-blog" element={<Doctoraddblog />} />
              <Route
                path="/blog/doctor-pending-blog"
                element={<DoctorPendingBlog />}
              />
              <Route
                path="/blog/doctor-edit-blog"
                element={<Doctoreditblog />}
              />
              {/* pages */}

              <Route path="/doctor/search-doctor1" element={<SearchDoctor />} />
              <Route
                path="/doctor/search-doctor2"
                element={<SearchDoctor2 />}
              />
              <Route path="/pages/component" element={<Components />} />
              <Route path="/pages/blank-page" element={<BlankPage />} />
              <Route path="/pages/calendar" element={<Calendar />} />
              <Route path="/pages/invoice" element={<Invoice />} />
              <Route path="/doctor/invoice" element={<Invoice />} />
              <Route path="/pages/invoice-view" element={<InvoiceView />} />
              <Route path="/pages/aboutus" element={<Aboutus />} />
              <Route path="/pages/contactus" element={<Contactus />} />
              <Route path="/pages/comingsoon" element={<Comingsoon />} />
              <Route path="/pages/maintenance" element={<Maintenance />} />
              <Route path="/pages/pricing-plan" element={<PricingPlan />} />
              <Route path="/pages/error-404" element={<Error404 />} />
              <Route path="/pages/error-500" element={<Error500 />} />
              <Route path="/pages/faq" element={<Faq />} />
              <Route
                path="/patient/patientregisterstep-1"
                element={<Patientregisterstepone />}
              />
              <Route
                path="/patient/patientregisterstep-2"
                element={<Patientregistersteptwo />}
              />
              <Route
                path="/patient/patientregisterstep-3"
                element={<Patientregisterstepthree />}
              />
              <Route
                path="/patient/patientregisterstep-4"
                element={<Patientregisterstepfour />}
              />
              <Route
                path="/patient/patientregisterstep-5"
                element={<Patientregisterstepfive />}
              />
              <Route
                path="/patient/doctor-profile"
                element={<DoctorProfile />}
              />
              <Route path="/doctor/my-patients" element={<MyPatient />} />
              <Route path="/patient/booking1" element={<Booking />} />
              <Route path="/patient/booking2" element={<Booking2 />} />
              <Route path="/patient/patient-chat" element={<PatientChat />} />
              <Route path="/patient/checkout" element={<Checkout />} />
              <Route
                path="/patient/booking-success"
                element={<BookingSuccess />}
              />
              <Route path="/patient/dashboard" element={<Dashboard />} />
              <Route path="/patient/dependent" element={<PatientDependent />} />
              <Route path="/patient/accounts" element={<PatientAccounts />} />
              <Route path="/patient/orders" element={<Orders />} />
              <Route
                path="/patient/medicalrecords"
                element={<MedicalRecords />}
              />
              <Route
                path="/patient/medicaldetails"
                element={<MedicalDetails />}
              />
              <Route path="/patient/favourites" element={<Favourites />} />
              <Route path="/patient/profile" element={<Profile />} />
              <Route path="/patient/change-password" element={<Password />} />
              <Route
                path="/doctor/doctor-dashboard"
                element={<DoctorDashboard />}
              />
              <Route path="/doctor/social-media" element={<SocialMedia />} />
              <Route
                path="/doctor/schedule-timing"
                element={<ScheduleTiming />}
              />
              <Route
                path="/doctor/available-timing"
                element={<AvailableTiming />}
              />
              <Route path="/doctor/account" element={<Accounts />} />
              <Route
                path="/doctor/doctor-change-password"
                element={<DoctorPassword />}
              />
              <Route path="/doctor/appointments" element={<Appointments />} />
              <Route
                path="/doctor/patient-profile"
                element={<PatientProfile />}
              />
              <Route path="/add-prescription" element={<AddPescription />} />
              <Route path="/add-billing" element={<AddBilling />} />
              <Route
                path="/doctor/profile-setting"
                element={<ProfileSetting />}
              />
              <Route path="/doctor/review" element={<Review />} />
              <Route
                path="/doctor/doctor-register"
                element={<DoctorRegister />}
              />
              <Route path="/registerstepone" element={<Registerstepone />} />
              <Route path="/register-step-2" element={<Registersteptwo />} />
              <Route path="/register-step-3" element={<Registerstepthree />} />
              <Route path="/pages/terms" element={<Terms />} />
              <Route path="/pages/privacy-policy" element={<Policy />} />

              {/* Pharmacy */}
              {/* <Route
                path="/Pharmacy/Pharmacy-index"
                exact
                component={Pharmacy}
              />
              <Route
                path="/Pharmacy/Pharmacy-details"
                exact
                component={pharmacydetail}
              />
              <Route
                path="/Pharmacy/pharmacy-search"
                exact
                component={PharmacySearch}
              />
              <Route path="/Pharmacy/product-all" exact component={Product} />
              <Route
                path="/Pharmacy/product-description"
                exact
                component={ProductDescription}
              />
              <Route path="/Pharmacy/cart" exact component={Cart} />
              <Route
                path="/Pharmacy/product-checkout"
                exact
                component={ProductCheckout}
              />
              <Route
                path="/Pharmacy/payment-success"
                exact
                component={PayoutSuccess}
              />
              <Route
                path="/Pharmacy/pharmacy-register"
                exact
                component={Pharmacyregister}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-1"
                exact
                component={Pharmacyregisterstepone}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-2"
                exact
                component={Pharmacyregistersteptwo}
              />
              <Route
                path="/Pharmacy/pharmacy-registerstep-3"
                exact
                component={Pharmacyregisterstepthree}
              />
              <Route
                path="/editprescription"
                exact
                component={EditPrescription}
              />
              <Route path="/editbilling" exact component={EditBilling} />
              <Route path="/patient/map-list" exact component={MapList} />
              <Route
                path="/pages/onboarding-email"
                exact
                component={OnboardingEmail}
              />
              <Route
                path="/pages/onboarding-identity"
                exact
                component={OnboardingIdentity}
              />
              <Route
                path="/pages/onboarding-payments"
                exact
                component={OnboardingPayments}
              />
              <Route
                path="/pages/onboarding-personalize"
                exact
                component={OnboardingPersonalize}
              />
              <Route
                path="/pages/onboarding-preferences"
                exact
                component={OnboardingPreferences}
              />
              <Route
                path="/pages/onboarding-verification"
                exact
                component={Onboardingverification}
              />
              <Route
                path="/pages/patient-email"
                exact
                component={PatientOnboardingEmail}
              />
              <Route
                path="/pages/patient-personalize"
                exact
                component={PatientOnboardingPersonalize}
              />
              <Route
                path="/pages/patient-details"
                exact
                component={PatientOnboardingDetails}
              />
              <Route
                path="/pages/patient-family-details"
                exact
                component={PatientFamilyDetails}
              />
              <Route
                path="/pages/patient-dependant-details"
                exact
                component={DependantDetails}
              />
              <Route
                path="/pages/patient-other-details"
                exact
                component={OtherDetails}
              />
              <Route
                path="/pages/onboarding-email-otp"
                exact
                component={OnboardingEmailOtp}
              />
              <Route
                path="/pages/onboarding-phone"
                exact
                component={Onboardingphone}
              />
              <Route
                path="/pages/onboarding-phone-otp"
                exact
                component={Onboardingphoneotp}
              />
              <Route
                path="/pages/onboarding-password"
                exact
                component={Onboardingpassword}
              />
              <Route
                path="/pages/patient-email-otp"
                exact
                component={PatientEmailOtp}
              />
              <Route
                path="/pages/patient-phone"
                exact
                component={PatientPhone}
              />
              <Route
                path="/pages/patient-phone-otp"
                exact
                component={patientphoneotp}
              />
              <Route
                path="/pages/patient-password"
                exact
                component={patientpassword}
              />
              <Route
                path="/pages/product-healthcare"
                exact
                component={Producthealthcare}
              />
              <Route
                path="/pages/patient-phone-otp"
                exact
                component={PhoneOtp}
              /> */}

              <Route path="/consultation" element={<Consultation />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/bookingsuccess" element={<Bookingsuccess />} />
              <Route path="/patientdetails" element={<Patientdetails />} />
              <Route path="/loginemail" element={<Loginemail />} />
            </Routes>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default AppContainer;
