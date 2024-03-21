import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import ErrorPage from "./Pages/ErrorPage";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import PrivateRoute from "./Components/Routes/Private";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" index element={<Login />}></Route>
        <Route path="/dashbord" element={<PrivateRoute />}>
          <Route path="home" element={<Home />}></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
