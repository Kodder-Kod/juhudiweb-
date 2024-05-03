"use client"
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import { db } from "../../config";
import { ref, set, onValue, push, remove, get } from 'firebase/database';
import { firebase } from '../../config.js';


// import authlayout to override default layout
import AuthLayout from "../../layouts/AuthLayout";
import { useRouter } from "next/navigation";


const DepositPage = () => {


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


        event.target.reset();

    }

    return (
        <Row className="align-items-center justify-content-center g-0 min-vh-100">
            <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
                {/* Card */}
                <Card className="smooth-shadow-md">
                    {/* Card body */}
                    <Card.Body className="p-6">
                        <div className="mb-4" style={{ display: "flex", alignItem: 'center', justifyContent: 'center' }} >
                            <h3 style={{fontSize:20, fontWeight:"bold"}}>Deposit in Juhudi Sacco </h3>
                        </div>

                        {/* Form */}
                        <Form onSubmit={handleFormSubmit}>
                            {/* Username */}
                         


                            {/* Email */}
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    placeholder="Enter Phone Number "
                                    required=""
                                />
                            </Form.Group>

                            {/* Password */}
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Enter Amount</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="save"
                                    placeholder="Enter Deposit amount"
                                    required=""
                                />
                            </Form.Group>


                            {/* Checkbox */}
                            <div className="my-7">
                                <Form.Check type="checkbox" id="check-api-checkbox">
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label>
                                        I agree to the <Link href="#" style={{ color: "blue" }}> Terms of Service </Link> and{" "}
                                        <Link href="#" style={{ color: "blue" }}> Privacy Policy.</Link>
                                    </Form.Check.Label>
                                </Form.Check>
                            </div>

                            <div>
                                {/* Button */}
                                <div className="d-grid">
                                    <Button variant="primary" type="submit" style={{ backgroundColor: 'rgb(34, 139, 34)' }}>
                                        Deposit
                                    </Button>
                                </div>
                                <div className="d-grid mt-2">
                                    <Button variant="primary" type="submit" style={{ backgroundColor: 'rgb(255, 36, 0)', borderWidth: 0 }}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};


DepositPage.Layout = AuthLayout;

export default DepositPage;
