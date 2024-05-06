import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

function VCDOptions() {
  const { isAdminLoggedIn } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);
  const [vcdID, setVcdID] = useState("");

  const handleInputChange = (e) => {
    setVcdID(e.target.value);
  };

  return (
    <div className="container">
      <h2>VCD Options</h2>
      <div className="form-group">
        <label htmlFor="vcdID">VCD ID</label>
        <input
          type="number"
          pattern="[0-9]*"
          minLength="1"
          min="1"
          className="form-control"
          id="vcdID"
          value={vcdID}
          onChange={handleInputChange}
        />
      </div>
      <Link
        to={`/updateVcd/${vcdID}`}
        className="btn btn-primary m-2"
        disabled={!vcdID}
      >
        Update VCD
      </Link>
      <Link
        to={`/viewVcd/${vcdID}`}
        className="btn btn-primary m-2"
        disabled={!vcdID}
      >
        View and Delete VCD
      </Link>
    </div>
  );
}

export default VCDOptions;
