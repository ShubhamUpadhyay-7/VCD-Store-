import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

const AdminDashboard = () => {
  const { isAdminLoggedIn, clearAuth } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/admin");
    }
  }, [isAdminLoggedIn, navigate]);
  const handleLogout = () => {
    clearAuth();
    navigate("/admin");
  };

  // if (!isAdminLoggedIn) {
  //   return null;
  // }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Admin Dashboard</h2>
              <div className="text-center">
                <Link to="/admin/vcdstores" className="btn btn-primary m-2">
                  Add VCD Store details
                </Link>
                <Link to="/admin/storeOptions" className="btn btn-primary m-2">
                  Update VCD Store details
                </Link>
                <Link to="/admin/storeOptions" className="btn btn-primary m-2">
                  View VCD Store details
                </Link>
                <Link to="/admin/addVCDDetails" className="btn btn-primary m-2">
                  Add VCD details
                </Link>
                <Link to="/admin/VcdID" className="btn btn-primary m-2">
                  Update VCD details
                </Link>
                <Link to="/admin/VcdID" className="btn btn-primary m-2">
                  Delete VCD details
                </Link>
                <Link
                  to="/admin"
                  className="btn btn-danger m-2"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
