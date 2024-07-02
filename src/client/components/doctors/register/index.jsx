import React, { useEffect, useState } from "react";
import loginBanner from "../../../assets/images/login-banner.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import axios from "axios";

const DoctorRegister = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const postDoctor = async (DoctorInfo) => {
    try {
      const response = await axios.post(
        "http://localhost:5505/api/v1/auth/doctor/signup",
        DoctorInfo
      );
      console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error posting user data:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const DoctorInfo = {
    name: name,
    email: email,
    password: password,
    phoneNumber: number,
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    postDoctor(DoctorInfo)
      .then((data) => {
        console.log("Successfully posted New Doctor:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
      if (name && email && password)
     { navigate("/login")}

    setName("");
    setEmail("");
    setPassword("");

  };

  const config = "/shefaa/system";
  useEffect(() => {
    document.getElementsByTagName("body")[0].className = "account-page";

    return () => (document.getElementsByTagName("body")[0].className = "");
  });

  return (
    <>
      <Header {...props} />
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Login Banner"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Doctor Register{" "}
                        <Link to="/register">Not a Doctor?</Link>
                      </h3>
                    </div>

                    <form
                      action={`${config}/registerstepone`}
                      onSubmit={handleSubmit}
                    >

                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="focus-label">Name</label>
                      </div>


                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="focus-label">Email</label>
                      </div>

                      <div className="form-group form-focus">
                        <input
                          type="tel"
                          className="form-control floating"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        <label className="focus-label">Phone Number</label>
                      </div>

                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>

                      
                      <div className="text-end">
                        <Link to="/login" className="forgot-link">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                        // onClick={() => history.push("/pages/onboarding-email")}
                      >
                        Signup
                      </button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <Link to="#0" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1"></i> Login
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="#0" className="btn btn-google w-100">
                            <i className="fab fa-google me-1"></i> Login
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default DoctorRegister;
