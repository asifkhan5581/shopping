import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        name,
        password
      );
      const user = userCredential.user;
      console.log(user);

      navigate("/checkForm");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" md="6" className="login-form">
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input
                type="email"
                id="username"
                name="username"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary" type="submit" className="mr-2">
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
