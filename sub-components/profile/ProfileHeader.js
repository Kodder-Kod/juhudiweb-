// import node module libraries

"use client"

import React ,{useState, useEffect, useCallback} from "react"
import { db } from "../../config";
import { ref, set, onValue, push, remove, get } from 'firebase/database';
import { firebase } from '../../config.js';

import Link from "next/link";
import { Col, Row, Image } from "react-bootstrap";

const ProfileHeader = () => {

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
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} xs={12}>
        {/* Bg */}
        <div
          className="pt-20 rounded-top"
          style={{
            background: "url(/images/background/profile-cover.jpg) no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="bg-white rounded-bottom smooth-shadow-sm ">
          <div className="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
            <div className="d-flex align-items-center">
              {/* avatar */}
              <div className="avatar-xxl avatar-indicators avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                <Image
                  src="/images/juhudi pic.png"
                  className="avatar-xxl rounded-circle border border-4 border-white-color-40"
                  alt=""
                />
                <Link
                  href="#!"
                  className="position-absolute top-0 right-0 me-2"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Verified"
                >
                  <Image
                    src="/images/svg/checked-mark.svg"
                    alt=""
                    height="30"
                    width="30"
                  />
                </Link>
              </div>
              {/* text */}
              <div className="lh-1">
                <h2 className="mb-0">
                  {namefirst} {namelast}
                  <Link
                    href="#!"
                    className="text-decoration-none"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Beginner"
                  ></Link>
                </h2>
                <p className="mb-0 d-block">{email}</p>
              </div>
            </div>
          
          </div>
          {/* nav */}
          <ul className="nav nav-lt-tab px-4" id="pills-tab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" href="#">
                Overview
              </Link>
            </li>
          
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
