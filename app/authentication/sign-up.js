// import node module libraries
"use client"
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import { db } from "../../config";
import { ref, set, onValue, push, remove, get } from 'firebase/database';
import { firebase } from '../../config.js';


// import authlayout to override default layout
import AuthLayout from "../../layouts/AuthLayout";
import { useRouter } from "next/navigation";

const SignUp = () => {

  const router = useRouter()


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const conpassword = event.target.elements.conpassword.value;

    console.log("name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    registerUser(name, email, password, conpassword)

    event.target.reset();

  }



  const registerUser = async (adminName, adminEmail, adminPassword, conPassword) => {

    if (adminPassword.length < 6) {

      console.log("password ni less brathe")

    } else {
      if (adminPassword == conPassword) {

        if (!adminEmail || !adminPassword || !adminName) {

          console.log("failed")

        } else {

          await firebase.auth().createUserWithEmailAndPassword(adminEmail, adminPassword)

            .then(() => {
              firebase.auth().currentUser.sendEmailVerification({

                handleCodeInApp: true,

                url:"https://juhudu002-default-rtdb.firebaseio.com",
              })
                .then(() => {
                  console.log(" waze")
                })
                .catch((error) => {
                  console.log("verify error", error.message)

                })
                .then(() => {

                  try {

                    const dbRef = ref(db, `user/`);

                    const newAdminRef = push(dbRef, {
                      Email: adminEmail,
                      Name: adminName,
                    });

                    console.log("imeweza")

                    const newAdminKey = newAdminRef.key;


                    if (newAdminKey) {

                      router.push('../pageroutes/admin');
                    }

                  } catch {
                    console.log("Did not register")
                  }
                })

                .catch((error) => {
                  console.log(error.message)
                })
            })
        }

      }
      else {
        console.error("haikumake it")
      }
    }

  }

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4" style={{ display: "flex", alignItem: 'center', justifyContent: 'center' }} >
              <Link href="/">
                <Image
                  src="/images/juhudi pic.png"
                  className="mb-2"
                  alt=""
                  style={{ borderRadius: 30 }}
                />
              </Link>

            </div>
            {/* Form */}
            <Form onSubmit={handleFormSubmit}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or l</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="User Name"
                  required=""
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter address here"
                  required=""
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="**************"
                  required=""
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="conpassword"
                  placeholder="**************"
                  required=""
                />
              </Form.Group>

              {/* Checkbox */}
              <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and{" "}
                    <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit" style={{ backgroundColor: '#2f2d5d' }}>
                    Create Free Account
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/pageroutes/signinadmin" className="fs-5">
                      Already member? Login{" "}
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/pageroutes/forget-password/"
                      className="text-inherit fs-5"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignUp.Layout = AuthLayout;

export default SignUp;
