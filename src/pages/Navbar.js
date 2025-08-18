import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "rgba(0,0,0,0.7)", // شبه Gradient Overlay متناسق مع الصفحة
        backdropFilter: "blur(5px)", // تأثير زجاجي خفيف
        padding: "0.5rem 1rem",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000
      }}
    >
      {/* اللوجو على اليمين */}
      <Link className="navbar-brand d-flex align-items-center me-auto" to="/">
        <img
          src="logo3.PNG"
          alt="Logo"
          width="50"
          height="50"
          className="me-2 rounded"
        />
        <h1 style={{ fontSize: "1.5rem", margin: 0 }}>العــــــدل</h1>
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

      {/* اللينكات */}
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
    </nav>
  );
}

export default Navbar;
