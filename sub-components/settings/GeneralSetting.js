// import node module libraries
import { Col, Row, Form, Card, Button, Image } from "react-bootstrap";

import { db } from "../../config";
import { ref, set, onValue, push, remove, get,update} from 'firebase/database';
import { firebase } from '../../config.js';



// import widget as custom components
import { FormSelect, DropFiles } from "../../widgets";

const GeneralSetting = () => {


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const firstname = event.target.elements.firstName.value;
    const lastname = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const bank = event.target.elements.bank.value;
    const accountnumber = event.target.elements.accountnumber.value;
    const location = event.target.elements.location.value;

    const tot = addUser(firstname, lastname, email, phone, bank, accountnumber, location)

    event.target.reset();

  }


  const addUser = async (firstname, lastname, email, phone, bank, accountnumber, location) => {
    console.log("niko")
    try {
      update(ref(db, `user/`), {

        FirstName: firstname,
        LastName: lastname,
        Email: email,
        Phone: phone,
        Bank: bank,
        Account: accountnumber,
        Location: location,

      });

      console.log("imeweza")
    }

    catch(error) {
      console.log(error.message)
    }

  }


  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Profile Setting</h4>
          <p className="mb-0 fs-5 text-muted">
            Profile configuration settings{" "}
          </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
 {/*
            <Row className="align-items-center mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Avatar</h5>
              </Col>



              <Col md={9}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image
                      src="/images/avatar/avatar-5.jpg"
                      className="rounded-circle avatar avatar-lg"
                      alt=""
                    />
                  </div>
                  <div>
                    <Button
                      variant="outline-white"
                      className="me-2"
                      type="submit"
                      style={{ backgroundColor: '#2f2d5d', color: "white" }}

                    >
                      Change{" "}
                    </Button>
                    <Button variant="outline-white" type="submit" style={{ backgroundColor: 'rgb(255, 36, 0)', color: 'white' }}>
                      Remove{" "}
                    </Button>
                  </div>
                </div>
              </Col>



            </Row>
            col */}

            <div>
              {/* border */}
              <div className="mb-6">
                <h4 className="mb-1">Basic information</h4>
              </div>


              <Form onSubmit={handleFormSubmit}>
                {/* row */}
                <Row className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="col-sm-4 col-form-label
                    form-label"
                  >
                    Full name
                  </label>
                  <Form.Group className="col-sm-4 mb-3 mb-lg-0" controlId="firstname">
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="firstName"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="col-sm-4" controlId="lastname">
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="lastName"
                      required
                    />
                  </Form.Group>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <label
                    htmlFor="email"
                    className="col-sm-4 col-form-label
                    form-label"
                  >
                    Email
                  </label>
                  <Form.Group className="col-md-8 col-12" controlId="email">
                    <Form.Control
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </Form.Group>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">
                    Phone
                  </Form.Label>
                  <Col md={8} xs={12}>
                  <Form.Group controlId="phone">
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone"
                      name="phone"
                    />
                   </ Form.Group>
                  </Col>
                </Row>

                {/* Location */}


                {/* Address Line One */}
                <Row className="mb-3">

                  <Form.Label className="col-sm-4" htmlFor="bank">
                    Bank
                  </Form.Label>
                  <Col md={8} xs={12}>
                  <Form.Group controlId="bank">
                    <Form.Control
                      type="text"
                      placeholder="Enter Name of Bank"
                      name="bank"
                      required
                    />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Address Line Two */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="Account Number">
                    Account Number
                  </Form.Label>
                  <Col md={8} xs={12}>
                  <Form.Group controlId="accoutnumber">
                    <Form.Control
                      type="text"
                      placeholder="Enter Account Number"
                      name="accountnumber"
                      required
                    />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Zip code
                
                     <i className="fe fe-info fs-4 me-2 text-muted icon-xs"></i>
                */}
                <Row className="align-items-center">
                  <Form.Label className="col-sm-4" htmlFor="location">
                    Location

                  </Form.Label>

                  <Col md={8} xs={12}>
                  <Form.Group controlId="location">
                    <Form.Control
                      type="text"
                      placeholder="Enter Locaction "
                      name="location"
                      required
                    />
                    </Form.Group>
                  </Col>

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit" style={{ backgroundColor: '#2f2d5d' }}>
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </Form>




            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default GeneralSetting;
