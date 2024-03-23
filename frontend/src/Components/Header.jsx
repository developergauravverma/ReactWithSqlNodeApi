import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth";

const Header = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const logout = () => {
    setAuth({
      ...auth,
      user: null,
    });
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink to="/" className="navbar-brand">
            Like-App
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/dashbord/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="" className="nav-link">
                    Welcome {auth.user.UserName}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" onClick={logout}>
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
