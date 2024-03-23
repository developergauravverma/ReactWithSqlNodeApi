import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import signUpImg from "../Assets/Images/SignUpImg.jpg";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });
  const navigation = useNavigate();
  const getValues = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          UserName: user.userName,
          Password: user.password,
          Email: user.email,
          Mobile: user.mobile,
          Address: user.address,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigation("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div
              className="d-flex justify-content-center flex-column flex-wrap align-items-center"
              style={{ height: "78vh" }}
            >
              <h3 className="mt-3">Register Form</h3>
              <Form className="col-lg-8">
                <Form.Group className="mt-2">
                  <Form.Control
                    onChange={getValues}
                    name="userName"
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
              </Form>
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
              <Form className="col-lg-8">
                <Form.Group className="mt-2">
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    onChange={getValues}
                    name="mobile"
                  />
                </Form.Group>
              </Form>
              <Form className="col-lg-8">
                <Form.Group className="mt-2">
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={getValues}
                    name="address"
                  />
                </Form.Group>
              </Form>
              <Button
                className="mt-3 col-lg-4"
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Register
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

export default Register;
