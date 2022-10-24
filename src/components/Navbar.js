import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  let navigate = useNavigate();
  useEffect(() => {
    console.log("Token: ", token);
    setToken(localStorage.getItem("token"));
  }, [token]);

  function logout() {
    localStorage.removeItem("token");
    navigate("/home");
    console.log("logout");
  }

  return (
    <nav className="navbar sticky-top mb-2 px-2 navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        myStore
      </Link>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/home"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/cart"}>
              Cart
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {token && (
          <button
            onClick={logout}
            className="btn btn-outline-light bg-dark text-white"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
