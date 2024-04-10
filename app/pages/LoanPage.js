'use client'
import React from 'react'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "../../widgets/index.js";

// import sub components
import { Borrowers, LoanAnalysis } from "../../sub-components/index.js";

// import required data files
import ProjectsStatsData from "../../data/dashboard/ProjectsStatsData";
import SaveDashboard from '@/widgets/stats/saveDashboard.js';
import LoanData from '@/data/loan/LoanData.js';

const Loan = () => {

    return (
        <Fragment>
            <div className="pt-10 pb-21" style={{ backgroundColor: 'rgb(255, 36, 0)' }}></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Loan Page </h3>
                                </div>
                                {/* <div>
                                    <Link href="#" className="btn btn-white">Create New Project</Link>
                                </div> */}
                            </div>
                        </div>
                    </Col>

                </Row>


                <div style={{ marginTop: 40, backgroundColor: 'rgb(34, 139, 34)', borderRadius: 20, width: 200, height: 35, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Link href="/pageroutes/loanapplicationadmin " style={{ color: "white", fontSize:14 }}  >
                    Loan Applicants
                    </Link>
                </div>




                <Row className="my-6">


                    <Col xl={3} lg={12} md={12} xs={12} >
                        {LoanData.map((item, index) => {
                            return (
                                <div  key={index} style={{ marginTop: 10 }}>
                                    <SaveDashboard info={item} />
                                </div>
                            )
                        })}
                    </Col>

                    {/* card  */}
                    <Col xl={9} lg={12} md={12} xs={12}>

                        {/* Teams  */}

                        <div>
                            <LoanAnalysis />
                            <div style={{ marginTop: 10 }}>
                                <Borrowers />
                            </div>

                        </div>


                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

}

export default Loan;