import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { useUserAuth } from "../context/UserAuthContext";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);
  const { loginUser } = useUserAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/api/users/login", null, {
        params: {
          emailId: formData.emailId,
          password: formData.password,
        },
      })
      .then((response) => {
        console.log("User logged in successfully!");
        loginUser();
        const responseParts = response.data.split(" ");
        const userIdPart = responseParts[responseParts.length - 1];
        const userId = userIdPart.split(":")[1];
        localStorage.setItem("userId", userId);
        navigate("/user/dashboard");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setLoginError(true);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              {loginError && (
                <div className="alert alert-danger" role="alert">
                  Invalid email or password. Please try again.
                </div>
              )}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="emailId">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailId"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                <p>
                  Not registered yet? <a href="/register">Register here</a>.
                </p>
                <p>
                  Login as admin <a href="/admin">here</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
