import React from "react";

function PaymentSuccessPage() {
  return (
    <div className="container mt-5">
      <div className="card p-5 text-center">
        <h2 className="mb-4 text-success">Payment Successful</h2>
        <p className="lead">
          Thank you for your order! Your payment was successful.
        </p>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
