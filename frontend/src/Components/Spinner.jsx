import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 && navigate("/login", { state: location.pathname });
    return () => {
      clearInterval(intervalId);
    };
  }, [count, navigate, location]);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <h1 className="text-center">redirecting to you in {count} second</h1>
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
