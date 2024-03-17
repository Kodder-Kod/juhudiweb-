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




const SignIn = () => {

  const router = useRouter()

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    console.log("Email:", email);
    console.log("Password:", password);


    const loginFun=LoginUser(email,password)

    event.target.reset();
 
  };



  const LoginUser = async (email, password) => {

    if (!email || !password) {
     

    } else {

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)

            const Role = await fetchRole(email)

        }
        catch (error) {
            console.log(error.message)
           
        }

    }
}



const fetchRole = async (email) => {

  const snapshot = await get(ref(db, `user/`));
  const data = snapshot.val();

  if (data) {

      const newPosts = Object.keys(data).map(key => ({
          id: key,
      }));


      let name = null;
      let emailUser = null;
      let id = null;

     

      Object.entries(data).forEach(([key, value]) => {
          if (value.Email === email) {

              name = value.Name;
              emailUser = value.Email;
              id = key

              console.log(id, "id.....id1")

              if (id){

                router.push('../pageroutes/admin');
              }

              return; // exit the loop early if the email is found
          }
      }

      );



  }
}


  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6" >
            <div className="mb-4" style={{display:"flex", alignItem:'center', justifyContent:'center'}}>
              <Link href="/">
                <Image
                  src="/images/juhudi pic.png"
                  className="mb-2"
                  alt=""
                  style={{borderRadius:30}}
                />
              </Link>
            
            </div>
            {/* Form */}
            <Form onSubmit={handleFormSubmit}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
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
            
              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit" style={{backgroundColor:'#2f2d5d'}}>
                    Sign In
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/pageroutes/sign-up" className="fs-5">
                      Create An Account{" "}
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

SignIn.Layout = AuthLayout;

export default SignIn;
