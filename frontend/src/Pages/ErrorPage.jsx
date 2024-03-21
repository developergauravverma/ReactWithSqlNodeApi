import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import errorImg from "../Assets/Images/errorImg.jpeg";

const ErrorPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center align-content-center flex-column flex-wrap mt-5">
            <img src={errorImg} alt="default" className="errorImg" />
            <h1>404</h1>
            <h4>Page not found</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ErrorPage;
