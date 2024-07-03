import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";

const LoginContainer = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const Login = async (loginInfo,token) => {
    try {
      const response = await axios.post(
        "http://localhost:5505/api/v1/auth/user/login",
        JSON.stringify(loginInfo),
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer`,
          },
        }
      );
      console.log("Response:", JSON.stringify(response?.data));
      return response.data;
    } catch (error) {
      console.error(
        "Error logging in:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const loginInfo = {
      email: email,
      password: password,
    };

    Login(loginInfo)
      .then((thedata) => {
        console.log("Successfully logged in:", thedata);
        setSuccess(true);

        localStorage.setItem("user", JSON.stringify(thedata.data.name));
        localStorage.setItem("token", JSON.stringify(thedata.token));

        navigate("/index");
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrMsg("Login failed. Please try again.");
      });

    setEmail("");
    setPassword("");
  };

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
                      alt="Shefaa Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Shefaa</span>
                      </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group form-focus">
                        <input
                          type="email"
                          className="form-control floating"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
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
                          Forgot Password?
                        </Link>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 btn-lg login-btn"
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <Link to="/index" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/index" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </Link>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="/register">Register</Link>
                      </div>
                    </form>
                    {errMsg && (
                      <p ref={errRef} className="error-message">
                        {errMsg}
                      </p>
                    )}
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

export default LoginContainer;
