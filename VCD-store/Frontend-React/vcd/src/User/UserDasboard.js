import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
function UserDashboard() {
  const { isUserLoggedIn, clearUserAuth } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  const handleLogout = () => {
    clearUserAuth();
    navigate("/login");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">User Dashboard</h2>
              <div className="text-center">
                <Link to="/searchVCDStores" className="btn btn-primary m-2">
                  Search VCD Store details
                </Link>
                <Link to="/searchVCDDetails" className="btn btn-primary m-2">
                  Search VCDs
                </Link>
                <Link to="/cart" className="btn btn-primary m-2">
                  Cart
                </Link>
                <button className="btn btn-danger m-2" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
