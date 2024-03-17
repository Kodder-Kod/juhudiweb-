// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import AuthLayout from "../../layouts/AuthLayout";

const ForgetPassword = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;


    console.log("Email:", email);

    changepassword(email)

    event.target.reset();

  }


  const changepassword = async (email) => {
    await firebase.auth().sendPasswordResetEmail(email)
      .then(() => {

        console.log("imeweza ")
      }).catch((error) => {

        console.log("error on reset", error)

      })
  }


  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4" style={{ display: "flex", alignItem: 'center', justifyContent: 'center' }}>
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
              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </Form.Group>
              {/* Button */}
              <div className="mb-3 d-grid">
                <Button variant="primary" type="submit" style={{ backgroundColor: '#2f2d5d' }}>
                  Reset Password
                </Button>
              </div>
              <span>
                Don&apos;t have an account?{" "}
                <Link href="/pageroutes/sign-In">Sign In</Link>
              </span>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

ForgetPassword.Layout = AuthLayout;

export default ForgetPassword;
