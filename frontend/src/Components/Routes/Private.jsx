import React, { useState, useEffect } from "react";
import { useAuth } from "../../Contexts/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  debugger;
  const [ok, setOk] = useState(0);
  // eslint-disable-next-line
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    if (auth.user) {
      setOk(true);
    } else {
      setOk(false);
    }
    // eslint-disable-next-line
  }, []);

  return ok ? <Outlet /> : <Spinner />;
}
