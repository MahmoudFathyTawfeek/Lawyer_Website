import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(5px)",
        padding: "0.5rem 1rem",
        zIndex: 1000
      }}
    >
      <div className="container-fluid">
        {/* اللوجو */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="logo3.PNG"
            alt="Logo"
            width="50"
            height="50"
            className="me-2 rounded"
          />
          <span style={{ fontSize: "1.5rem" }}>العــــــدل</span>
        </Link>

        {/* زرار الموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* القائمة */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">من نحن</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">خدماتنا</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">فريق العمل</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
