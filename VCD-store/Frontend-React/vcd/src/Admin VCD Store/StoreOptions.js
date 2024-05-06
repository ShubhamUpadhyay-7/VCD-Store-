import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function StoreOptions() {
  const [storeID, setStoreID] = useState("");
  const navigate = useNavigate();
  const { isAdminLoggedIn } = useAdminAuth();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);

  const handleInputChange = (e) => {
    setStoreID(e.target.value);
  };

  return (
    <div className="container">
      <h2>Store Options</h2>
      <div className="form-group">
        <label htmlFor="storeID">Store ID</label>
        <input
          type="number"
          className="form-control"
          id="storeID"
          value={storeID}
          onChange={handleInputChange}
        />
      </div>
      <Link
        to={`/viewDetails/${storeID}`}
        className="btn btn-primary m-2"
        disabled={!storeID}
      >
        View Details
      </Link>
      <Link
        to={`/modifyDetails/${storeID}`}
        className="btn btn-primary m-2"
        disabled={!storeID}
      >
        Modify Details
      </Link>
    </div>
  );
}

export default StoreOptions;
