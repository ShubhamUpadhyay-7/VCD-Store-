import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { Link, Navigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function AddVCDStoreDetails() {
  const { isAdminLoggedIn } = useAdminAuth();
  const [formData, setFormData] = useState({
    storeName: "",
    locality: "",
    city: "",
    state: "",
    phoneNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (!isAdminLoggedIn) {
      return <Navigate to="/admin" />;
    }
  }, [isAdminLoggedIn]);

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
      .post("/api/admin/vcdstores", formData)
      .then((response) => {
        console.log("VCD Store details added successfully!", response.data);
        setSuccessMessage("VCD Store added successfully!");
      })
      .catch((error) => {
        console.error("Error adding VCD Store details:", error);
      });
  };

  return (
    <div className="container">
      <h2>Add VCD Store Details</h2>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="storeName">Store Name</label>
          <input
            type="text"
            className="form-control"
            id="storeName"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="locality">Locality</label>
          <input
            type="text"
            className="form-control"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]*"
            minLength="10"
            maxLength="10"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add VCD Store
        </button>
      </form>
      <button type="button" className="btn btn-primary">
        <Link
          to="/admin/dashboard"
          style={{ textDecoration: "none", color: "white" }}
        >
          Go to Admin Dashboard
        </Link>
      </button>
    </div>
  );
}

export default AddVCDStoreDetails;
