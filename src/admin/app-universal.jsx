/* eslint-disable react/prop-types */
import React, { useState, useContext, useMemo, useEffect } from "react";
import config from "config";
 
import { Route, BrowserRouter, Routes, useLocation, Router } from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import Specialities from "./components/specialities";
import Doctors from "./components/doctors";
import Patients from "./components/patients";
import Reviews from "./components/reviews";
import Transaction from "./components/transaction";
import Settings from "./components/settings";
import InvoiceReport from "./components/Reports/InvoiceReport/InvoiceReport";
import ProductList from "./components/productlist";
import PharmacyList from "./components/pharmacylist";
import Categories from "./components/pharmacylist/Categories";
import Blog from "./components/Blog/blog";
import BlogDetails from "./components/Blog/blogdetails";
import AddBlog from "./components/Blog/addblog";
import EditBlog from "./components/Blog/editblog";
import PendingBlog from "./components/Blog/pendingblog";
import Profile from "./components/profile/Profile";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotpassword";
import Lockscreen from "./components/lockscreen";
import Error from "./components/error404";
import ErrorPage from "./components/error500";
import BasicInput from "./components/forms/baiscinput";
import FormInput from "./components/forminput";
import FormHorizontal from "./components/formhorizontal";
import FormVertical from "./components/formvertical";
import FormMask from "./components/formask";
import FormValidation from "./components/formvalidation";
import BlankPage from "./components/blankpage";
import Components from "./components/component";
import DataTables from "./components/datatables";
import BasicTables from "./components/basictables";
import ProductCategories from "./components/productlist/ProductCategories";

import { Appcontext } from "../approuter";
import InvoiceReportList from "./components/Reports/InvoiceReport/InvoiceReportList";

const AppUniversal = function (props) {
  const [menu, setMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const { isAuth, setIsAuth } = useContext(Appcontext);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname == "/admin/login" ||
      location.pathname == "/admin/register" ||
      location.pathname == "/admin/forgotPassword" ||
      location.pathname == "/admin/lockscreen" ||
      location.pathname == "/admin/conform-email" ||
      location.pathname == "/admin/404" ||
      location.pathname == "/admin/500"
    ) {
      setIsAuth("admin");
    } else {
      setIsAuth("user");
    }
  }, [location.pathname,setIsAuth]);

  return (
    <div>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>

      {isAuth !== "admin" && (
          <Header onMenuClick={toggleMobileMenu} />
        )}
       <div>
        <Routes>
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/forgotPassword" element={<ForgotPassword />} />
          <Route path="/admin/lockscreen" element={<Lockscreen />} />
          <Route path="/admin/appointment-list" element={<Appointments />} />
          <Route path="/admin/specialities" element={<Specialities />} />
          <Route path="/admin/doctor-list" element={<Doctors />} />
          <Route path="/admin/patient-list" element={<Patients />} />
          <Route path="/admin/reviews" element={<Reviews />} />
          <Route path="/admin/transactions-list" element={<Transaction />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/invoicerepot" element={<InvoiceReport />} />
          <Route path="/admin/invoice" element={<InvoiceReportList />} />
          <Route path="/admin/blog" element={<Blog />} />
          <Route path="/admin/blog-details" element={<BlogDetails />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/admin/edit-blog" element={<EditBlog />} />
          <Route path="/admin/pending-blog" element={<PendingBlog />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/product-list" element={<ProductList />} />
          <Route path="/admin/pharmacy-list" element={<PharmacyList />} />
          <Route path="/admin/pharmacy-category" element={<Categories />} />
          <Route path="/admin/404" element={<Error />} />
          <Route path="/admin/500" element={<ErrorPage />} />
          <Route path="/admin/blank-page" element={<BlankPage />} />
          <Route path="/admin/components" element={<Components />} />
          <Route path="/admin/basic-input" element={<BasicInput />} />
          <Route path="/admin/form-input-group" element={<FormInput />} />
          <Route path="/admin/form-horizontal" element={<FormHorizontal />} />
          <Route path="/admin/form-vertical" element={<FormVertical />} />
          <Route path="/admin/form-mask" element={<FormMask />} />
          <Route path="/admin/form-validation" element={<FormValidation />} />
          <Route path="/admin/tables-basic" element={<BasicTables />} />
          <Route path="/admin/data-tables" element={<DataTables />} />
          <Route
            path="/admin/product-category"
            element={<ProductCategories />}
          />
        </Routes>
        </div>
      </div>
    </div>
  );
};


export default AppUniversal;
