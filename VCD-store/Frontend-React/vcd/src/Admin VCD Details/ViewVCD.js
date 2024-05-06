import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function ViewVCD() {
  const { isAdminLoggedIn } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  const { id } = useParams();
  const [vcdDetails, setVCDDetails] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`/api/admin/vcddetails/${id}`)
      .then((response) => {
        setVCDDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching VCD details:", error);
      });
  }, [id]);

  const handleDelete = () => {
    axiosInstance
      .delete(`/api/admin/vcddetails/${id}`)
      .then(() => {
        setSuccessMessage("VCD details deleted successfully!");
        setTimeout(() => {
          setSuccessMessage(null);
          navigate("/admin/dashboard");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error deleting VCD details:", error);
      });
  };

  if (!vcdDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>View VCD Details</h2>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <div>
        <strong>VCD Name:</strong> {vcdDetails.vcdName}
      </div>
      <div>
        <strong>Language:</strong> {vcdDetails.language}
      </div>
      <div>
        <strong>Category:</strong> {vcdDetails.category}
      </div>
      <div>
        <strong>Rating:</strong> {vcdDetails.rating}
      </div>
      <div>
        <strong>Quantity:</strong> {vcdDetails.quantity}
      </div>
      <div>
        <strong>Cost:</strong> {vcdDetails.cost}
      </div>
      <button className="btn btn-danger mt-3" onClick={handleDelete}>
        Delete VCD
      </button>
    </div>
  );
}

export default ViewVCD;
