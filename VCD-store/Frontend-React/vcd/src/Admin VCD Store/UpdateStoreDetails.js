import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function UpdateStoreDetails() {
  const { storeID } = useParams();
  const [storeDetails, setStoreDetails] = useState(null);
  const { isAdminLoggedIn } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);
  const [formData, setFormData] = useState({
    storeName: "",
    locality: "",
    city: "",
    state: "",
    phoneNumber: "",
  });
  const [successMessage, setSuccessMessage] = useState(null); // Add state for success message

  useEffect(() => {
    const idAsLong = Number(storeID);

    if (isNaN(idAsLong)) {
      console.error("Invalid Store ID");
      return;
    }

    axiosInstance
      .get(`/api/admin/vcdstores/${idAsLong}`)
      .then((response) => {
        setStoreDetails(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching VCD Store details:", error);
      });
  }, [storeID]);

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
      .put(`/api/admin/vcdstores/${storeID}`, formData)
      .then((response) => {
        console.log("VCD Store details updated successfully!", response.data);
        setSuccessMessage("VCD Store details updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating VCD Store details:", error);
      });
  };

  if (!storeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Update VCD Store Details</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}{" "}
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
          Update VCD Store
        </button>
      </form>
    </div>
  );
}

export default UpdateStoreDetails;
