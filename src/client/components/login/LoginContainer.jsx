import React, { useEffect, useRef, useState } from "react";
import loginBanner from "../../assets/images/login-banner.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import axios from "axios";

// const config = "/react/template/";
const LoginContainer = (props) => {
  // const history = useHistory();
  useEffect(() => {
    userRef.current.focus();
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [LoginInfo]);

  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const Login = async (LoginInfo) => {
    try {
      const response = await axios.post(
        "http://localhost:5505/api/v1/auth/user/login",
        JSON.stringify(LoginInfo),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log("Response:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error logging in :",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const LoginInfo = {
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    Login(LoginInfo)
      .then((data) => {
        console.log("Successfully logged in:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    {
      navigate("/index");

      setEmail("");
      setPassword("");
      setSuccess(true);
    }

    return (
      <>
        <Header {...props} />

        <>
          {/* Page Content */}
          <div className="content top-space">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  {/* Login Tab Content */}
                  <div className="account-content">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-7 col-lg-6 login-left">
                        <img
                          src={loginBanner}
                          className="img-fluid"
                          alt="Doccure Login"
                        />
                      </div>
                      <div className="col-md-12 col-lg-6 login-right">
                        <div className="login-header">
                          <h3>
                            Login <span>Shefaa</span>
                          </h3>
                        </div>
                        <form>
                          <div className="form-group form-focus">
                            <input
                              type="email"
                              className="form-control floating"
                              ref={useRef}
                              autoComplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                            <label className="focus-label">Email</label>
                          </div>

                          <div className="form-group form-focus">
                            <input
                              type="password"
                              className="form-control floating"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              required
                            />
                            <label className="focus-label">Password</label>
                          </div>

                          <div className="text-end">
                            <Link
                              className="forgot-link"
                              to="/pages/forgot-password"
                            >
                              Forgot Password ?
                            </Link>
                          </div>

                          <Link
                            to="/index"
                            className="btn btn-primary w-100 btn-lg login-btn"
                            type="submit"
                          >
                            Login
                          </Link>
                          <div className="login-or">
                            <span className="or-line" />
                            <span className="span-or">or</span>
                          </div>
                          <div className="row form-row social-login">
                            <div className="col-6">
                              <Link
                                to="/index"
                                className="btn btn-facebook w-100"
                              >
                                <i className="fab fa-facebook-f me-1" /> Login
                              </Link>
                            </div>
                            <div className="col-6">
                              <Link
                                to="/index"
                                className="btn btn-google w-100"
                              >
                                <i className="fab fa-google me-1" /> Login
                              </Link>
                            </div>
                          </div>
                          <div className="text-center dont-have">
                            Don’t have an account?{" "}
                            <Link to="/register">Register</Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* /Login Tab Content */}
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

  export default LoginContainer;
};
