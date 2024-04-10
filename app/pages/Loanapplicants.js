'use client'
import React from 'react'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "../../widgets/index.js";

// import sub components
import { TransHistory } from "../../sub-components/index.js";

// import required data files
import HistoryData from '@/data/history/Historydata.js';


const LoanApplicant = () => {

    return (
        <Fragment >
            <div className="pt-10 pb-21" style={{backgroundColor:'rgb(255, 36, 0)'}}></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Loan Applicants </h3>
                                </div>
                            {/* <div>
                                    <Link href="#" className="btn btn-white">Create New Project</Link>
                                </div> */}    
                            </div>
                        </div>
                    </Col>
                  
                </Row>

      

                <Row className="my-6">
                    
                    {/* card  */}
                    <Col xl={12} lg={12} md={12} xs={12}>

                        {/* Teams  */}
                        <TransHistory />

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

}



export default LoanApplicant;