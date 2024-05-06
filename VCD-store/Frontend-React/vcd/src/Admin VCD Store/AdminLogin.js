import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { useAdminAuth } from "../context/AdminAuthContext";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const { loginAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/api/admin/login", formData)
      .then((response) => {
        console.log("Admin logged in successfully!", response.data);
        if (response.data) {
          loginAdmin();
          navigate("/admin/dashboard");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setLoginError(true);
      });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Admin Login</h2>
            {loginError && (
              <div className="alert alert-danger" role="alert">
                Invalid username or password. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
