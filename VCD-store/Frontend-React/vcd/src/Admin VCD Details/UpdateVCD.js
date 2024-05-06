import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function UpdateVCD() {
  const { isAdminLoggedIn } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    vcdName: "",
    language: "",
    category: "",
    rating: "",
    quantity: 0,
    cost: 0.0,
  });

  useEffect(() => {
    if (!id) return;

    axiosInstance
      .get(`/api/admin/vcddetails/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching VCD details:", error);
      });
  }, [id]);

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
      .put(`/api/admin/vcddetails/${id}`, formData)
      .then((response) => {
        console.log("VCD details updated successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error updating VCD details:", error);
      });
  };

  return (
    <div className="container">
      <h2>Update VCD Details</h2>
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
            type="text"
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
          Update VCD
        </button>
      </form>
    </div>
  );
}

export default UpdateVCD;
