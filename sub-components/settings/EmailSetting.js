// import node module libraries
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

const EmailSetting = () => {
  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">Password Setting</h4>
          <p className="mb-0 fs-5 text-muted">Passwords settings to profile </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        {/* card */}
        <Card id="edit">
          {/* card body */}
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Email</h4>
            </div>
            <Form>
              {/* New email */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="newEmailAddress">Email</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="email" placeholder="Enter your email address" id="newEmailAddress" required />
                </Col>
                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-3">
                  <Button variant="primary" type="submit" style={{ backgroundColor: '#2f2d5d' }}>
                    Change Password
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default EmailSetting