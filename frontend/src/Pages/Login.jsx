import React, { useState } from "react";
import signUpImg from "../Assets/Images/SignUpImg.jpg";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth";

const Login = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useAuth();
  const getValues = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const { email, password } = user;
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.allUser,
        });
        localStorage.setItem("auth", JSON.stringify(res.data.allUser));
        navigation("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center flex-column flex-wrap align-items-center">
              <h3 className="mt-3">Login Form</h3>
              <Form className="col-lg-8">
                <Form.Group className="mt-2">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    onChange={getValues}
                    name="email"
                  />
                </Form.Group>
              </Form>
              <Form className="col-lg-8">
                <Form.Group className="mt-2">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={getValues}
                    name="password"
                  />
                </Form.Group>
              </Form>
              <Button
                className="mt-3 col-lg-4"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </Col>
          <Col>
            <img src={signUpImg} alt="default" className="signupimg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
