import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./Admin VCD Store/NavigationBar";
import HomePage from "./Admin VCD Store/HomePage";
import Help from "./Admin VCD Store/Help";
import ContactUs from "./Admin VCD Store/ContactUs";
import LoginPage from "./Admin VCD Store/Login";
import RegistrationForm from "./Admin VCD Store/RegistrationForm";
import AdminLogin from "./Admin VCD Store/AdminLogin";
import AddVCDStoreDetails from "./Admin VCD Store/AddVCDStoreDetails";
import AdminDashboard from "./Admin VCD Store/AdminDashboard";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { UserAuthProvider } from "./context/UserAuthContext";
import StoreOptions from "./Admin VCD Store/StoreOptions";
import ViewStoreDetails from "./Admin VCD Store/ViewStoreDetails";
import UpdateStoreDetails from "./Admin VCD Store/UpdateStoreDetails";
import AddVCDDetails from "./Admin VCD Details/AddVcdDetails";
import VcdID from "./Admin VCD Details/VcdID";
import UpdateVCD from "./Admin VCD Details/UpdateVCD";
import ViewVCD from "./Admin VCD Details/ViewVCD";
import UserDashboard from "./User/UserDasboard";
import SearchByStateCity from "./User/SearchByStateCity";
import VCDSearchPage from "./User/VCDSearchPage";
import CartPage from "./User/CartPage";
import Payment from "./User/Payment";
import Success from "./User/Success";
function App() {
  return (
    <AdminAuthProvider>
      <UserAuthProvider>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/vcdstores" element={<AddVCDStoreDetails />} />
            <Route path="/admin/storeOptions" element={<StoreOptions />} />
            <Route
              path="/viewDetails/:storeID"
              element={<ViewStoreDetails />}
            />
            <Route
              path="/modifyDetails/:storeID"
              element={<UpdateStoreDetails />}
            />
            <Route path="/admin/addVCDDetails" element={<AddVCDDetails />} />
            <Route path="/admin/VcdID" element={<VcdID />} />
            <Route path="/updateVcd/:id" element={<UpdateVCD />} />
            <Route path="/viewVcd/:id" element={<ViewVCD />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/searchVCDStores" element={<SearchByStateCity />} />
            <Route path="/searchVCDDetails" element={<VCDSearchPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<Success />} />
          </Routes>
        </Router>
      </UserAuthProvider>
    </AdminAuthProvider>
  );
}

export default App;
