import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const StoreSearch = () => {
  const { isUserLoggedIn } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [stores, setStores] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get(
        `/api/users/findByStateAndCity?state=${state}&city=${city}`
      );
      setStores(response.data);
      setSearched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="store-search-container">
      <h2 className="store-search-heading">VCD Store Search Result</h2>
      {!searched && (
        <div className="search-container">
          <div className="search-input">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="search-input">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
      {searched && stores.length > 0 && (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Locality</th>
              <th>City</th>
              <th>State</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.storeID}>
                <td>{store.storeName}</td>
                <td>{store.locality}</td>
                <td>{store.city}</td>
                <td>{store.state}</td>
                <td>{store.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StoreSearch;
