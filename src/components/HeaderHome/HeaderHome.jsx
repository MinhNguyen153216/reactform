import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div>
      <div className="bg-dark">
        <div className="container">
          <nav className="navbar navbar-dark">
            <NavLink to="/reactform" className="navbar-brand mb-0 h1">
              Thông tin sinh viên
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
