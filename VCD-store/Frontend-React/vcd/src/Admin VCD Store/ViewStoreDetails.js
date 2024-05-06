import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function ViewStoreDetails() {
  const { storeID } = useParams();
  const [storeDetails, setStoreDetails] = useState(null);
  const { isAdminLoggedIn } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  useEffect(() => {
    const idAsLong = Number(storeID);
    console.log(storeID);
    console.log(idAsLong);

    if (isNaN(idAsLong)) {
      console.error("Invalid Store ID");
      return;
    }

    axiosInstance
      .get(`/api/admin/vcdstores/${idAsLong}`)
      .then((response) => {
        setStoreDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching VCD Store details:", error);
      });
  }, [storeID]);

  if (!storeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>View Store Details</h2>
      <div>
        <strong>Store Name:</strong> {storeDetails.storeName}
      </div>
      <div>
        <strong>Locality:</strong> {storeDetails.locality}
      </div>
      <div>
        <strong>City:</strong> {storeDetails.city}
      </div>
      <div>
        <strong>State:</strong> {storeDetails.state}
      </div>
      <div>
        <strong>Phone Number:</strong> {storeDetails.phoneNumber}
      </div>
    </div>
  );
}

export default ViewStoreDetails;
