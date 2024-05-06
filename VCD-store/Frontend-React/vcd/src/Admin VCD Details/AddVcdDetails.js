import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function AddVCDDetails() {
  const { isAdminLoggedIn } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);
  const [formData, setFormData] = useState({
    vcdName: "",
    language: "",
    category: "",
    rating: "",
    quantity: 0,
    cost: 0.0,
  });

  const [message, setMessage] = useState(null); // Added message state

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
      .post("/api/admin/vcddetails", formData)
      .then((response) => {
        setMessage("VCD details added successfully!");
        console.log("VCD details added successfully!", response.data);
      })
      .catch((error) => {
        setMessage("Error adding VCD details. Please try again.");
        console.error("Error adding VCD details:", error);
      });
  };

  return (
    <div className="container">
      <h2>Add VCD Details</h2>
      {message && <div className="alert alert-success">{message}</div>}{" "}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vcdName">VCD Name</label>
          <input
            type="text"
            className="form-control"
            id="vcdName"
            name="vcdName"
            value={formData.vcdName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input
            type="text"
            className="form-control"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            min="1"
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="cost"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add VCD
        </button>
      </form>
    </div>
  );
}

export default AddVCDDetails;
