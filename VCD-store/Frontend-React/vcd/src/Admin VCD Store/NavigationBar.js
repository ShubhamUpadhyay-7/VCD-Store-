import React from "react";
import { Link } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";
import { useUserAuth } from "../context/UserAuthContext";

function NavigationBar() {
  const { isAdminLoggedIn, logoutAdmin } = useAdminAuth();
  const { isUserLoggedIn, logoutUser } = useUserAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Online VCD System
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav ml-auto">
          {isAdminLoggedIn ? (
            <NavItem text="Dashboard" path="/admin/dashboard" />
          ) : isUserLoggedIn ? (
            <NavItem text="Dashboard" path="/user/dashboard" />
          ) : (
            <NavItem text="Home" path="/" />
          )}
          <NavItem text="Help" path="/help" />
          <NavItem text="ContactUs" path="/contact" />
          {isAdminLoggedIn ? (
            <NavItem text="Logout" action={logoutAdmin} />
          ) : isUserLoggedIn ? (
            <NavItem text="Logout" action={logoutUser} />
          ) : (
            <NavItem text="Login/Register" path="/login" />
          )}
        </ul>
      </div>
    </nav>
  );
}

const NavItem = ({ component: Component, text, path, action }) => (
  <li className="nav-item">
    {Component ? (
      <Component />
    ) : (
      <Link className="nav-link" to={path} onClick={action}>
        {text}
      </Link>
    )}
  </li>
);

export default NavigationBar;
