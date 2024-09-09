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
import { Link } from "react-router-dom";
import "./login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../Firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please upload a profile image.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now()}_${username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          toast.error(error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await setDoc(doc(db, "users", user.uid), {
            username,
            email,
            phone,
            image: downloadURL,
          });
          toast.success("User created successfully");
          navigate("/login");
        }
      );
    } catch (error) {
      toast.error("Something went wrong: " + error.message);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" md="6" className="login-form">
          <h1 className="text-center">Sign Up</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone Number:</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <FormGroup>
              <Label for="file">Upload your image:</Label>
              <Input
                type="file"
                id="file"
                name="file"
                required
                onChange={(e) => setFile(e.target.files[0])}
              />
            </FormGroup>
            <div className="text-center">
              <Button color="primary" type="submit" className="mr-2">
                Sign Up
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
