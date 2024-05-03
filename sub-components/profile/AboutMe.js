// import node module libraries
"use client"

import React ,{useState, useEffect, useCallback} from "react"
import { db } from "../../config";
import { ref, set, onValue, push, remove, get } from 'firebase/database';
import { firebase } from '../../config.js';
import { Col, Row, Card } from 'react-bootstrap';

const AboutMe = () => {

    const [namefirst, setNamefirst] = useState()
    const [namelast, setNamlast] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [location, setLocation] = useState()
    const [bank, setBank] = useState()
    const [account, setAccount] = useState()


    const fetchData = useCallback(() => {
        try {
            const startCountRef = ref(db, `user/`);
            onValue(startCountRef, (snapshot) => {

                const data = snapshot.val();
                if (data) {
                    const location = data.Location;
                    const firstname = data.FirstName;
                    const lastname = data.LastName;
                    const email = data.Email;
                    const phone = data.Phone;
                    const bank = data.Bank;
                    const account = data.Account;

                    setNamefirst(firstname)
                    setNamlast(lastname)
                    setLocation(location)
                    setAccount(account)
                    setBank(bank)
                    setEmail(email)
                    setPhone(phone)
     
                }
            })

        }
        catch { console.log('cannot read Admin') }

    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);



    return (
        <Col xl={6} lg={12} md={12} xs={12} className="mb-6">
            {/* card */}
            <Card>
                {/* card body */}
                <Card.Body>
                    {/* card title */}
                    <Card.Title as="h4">About Me</Card.Title>
                    <span className="text-uppercase fw-medium text-dark fs-5 ls-2">Bio</span>
                    <p className="mt-2 mb-6">The Best  Sacco in  Kenya
                     </p>
                    <Row>
                        <Col xs={12} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">Location</h6>
                            <p className="mb-0">{location}</p>
                        </Col>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">Phone </h6>
                            <p className="mb-0">{phone}</p>
                        </Col>
                        <Col xs={6} className="mb-5">
                            <h6 className="text-uppercase fs-5 ls-2">Bank  </h6>
                            <p className="mb-0">{bank}</p>
                        </Col>
                        <Col xs={6}>
                            <h6 className="text-uppercase fs-5 ls-2">Email </h6>
                            <p className="mb-0">{email}</p>
                        </Col>
                        <Col xs={6}>
                            <h6 className="text-uppercase fs-5 ls-2">Account No</h6>
                            <p className="mb-0">{account}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default AboutMe