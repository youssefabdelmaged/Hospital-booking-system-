import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import axios from "axios";

const Register = (props) => {
  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postUser = async (UserInfo) => {
    try {
      const response = await axios.post(
        "http://localhost:5505/api/v1/auth/user/signup",
        UserInfo
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

  const UserInfo = {
    name: name,
    email: email,
    password: password,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    postUser(UserInfo)
      .then((data) => {
        console.log("Successfully posted User:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setName("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return (
    <>
      <Header {...props} />

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Register Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="Doccure Register"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Patient Register{" "}
                          <Link to="/doctor/doctor-register">
                            Are you a Doctor?
                          </Link>
                        </h3>
                      </div>
                      {/* Register Form */}
                      <form onSubmit={handleSubmit}>
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
                            type="password"
                            className="form-control floating"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label className="focus-label">Create Password</label>
                        </div>

                        <div className="text-end">
                          <Link className="forgot-link" to="/login">
                            Already have an account?
                          </Link>
                        </div>

                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </button>

                        <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <Link to="#" className="btn btn-facebook w-100">
                              <i className="fab fa-facebook-f me-1" /> Login
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link to="#" className="btn btn-google w-100">
                              <i className="fab fa-google me-1" /> Login
                            </Link>
                          </div>
                        </div>
                      </form>
                      {/* /Register Form */}
                    </div>
                  </div>
                </div>
                {/* /Register Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
    </>
  );
};

export default Register;
