import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function PaymentPage() {
  const { isUserLoggedIn } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  const [formData, setFormData] = useState({
    creditCardNumber: "",
    validTill: "",
    cvv: "",
  });
  const location = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = () => {
    const orderData = {
      // creditCardNumber: formData.creditCardNumber,
      // validTill: formData.validTill,
      // cvv: formData.cvv,
      userId: localStorage.userId,
      vcdItems: location.state.vcdItems,
    };
    axiosInstance
      .post(
        `/api/users/payment?userId=${orderData.userId}`,
        orderData.vcdItems,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Order placed successfully!", response.data);
        navigate("/payment-success");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Payment Page</h2>
      <div className="mb-3">
        <label htmlFor="creditCardNumber" className="form-label">
          Credit Card Number
        </label>
        <input
          type="text"
          pattern="[0-9]*"
          minLength="12"
          maxLength="16"
          className="form-control"
          id="creditCardNumber"
          name="creditCardNumber"
          value={formData.creditCardNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="validTill" className="form-label">
          Valid Till
        </label>
        <input
          type="date"
          className="form-control"
          id="validTill"
          name="validTill"
          value={formData.validTill}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cvv" className="form-label">
          CVV
        </label>
        <input
          type="number"
          minLength="3"
          maxLength="3"
          className="form-control"
          id="cvv"
          name="cvv"
          value={formData.cvv}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="btn btn-primary" onClick={handlePayment}>
        Make Payment
      </button>
    </div>
  );
}

export default PaymentPage;
