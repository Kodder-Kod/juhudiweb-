'use client'
import React from 'react'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

import { BsSave } from "react-icons/bs";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md"
import { MdOutlinePayment } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// import widget/custom components
import { StatRightTopIcon } from "../../widgets/index.js";

// import sub components
import { HistoryDash, ClientPerformance } from "../../sub-components/indexclient.js";

// import required data files
import ProjectsStatsclient from '@/data/dashboard/projectclientsave.js'
import ProjectsStatsclientloan from '@/data/dashboard/projectcliebntloan.js';
import { Rowdies } from 'next/font/google/index.js';

const DashboardX2Client = () => {



    return (
        <Fragment>
            <div className="pt-10 pb-21" style={{ backgroundColor: '#584696' }}></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={4} md={12} xs={10}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white" style={{ fontSize: 30 }}>Juhudi Sacco</h3>
                                    <h3 className="mb-0  text-white mt-5" style={{ fontSize: 20 }}>Welcome name</h3>
                                    <h3 className="mb-0  text-white" style={{ fontSize: 17 }}>Bio about user</h3>

                                </div>
                                {/* <div>
                                    <Link href="#" className="btn btn-white">Create New Project</Link>
                                </div> */}
                            </div>
                        </div>
                    </Col>


                    <div style={{ width: 105, marginLeft: 5, marginRight:5 }} >
                        <Link href="/pageroutesclient/depositclient " style={{ color: "white", fontSize: 14 }}  >
                            <div style={{ marginTop: 40, backgroundColor: 'rgb(34, 139, 34)', borderRadius: 100, width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        < LiaPiggyBankSolid size={25} />
                                    </div>


                                    <div className="mt-1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <h3 style={{ color: "white", fontSize: 13 }}>
                                            Deposit/Save
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div style={{ width: 105, marginLeft: 5, marginRight:5 }} >
                        <Link href="/pageroutesclient/withdraw " style={{ color: "white", fontSize: 14 }}  >
                            <div style={{ marginTop: 40, backgroundColor: 'rgb(34, 139, 34)', borderRadius: 100, width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <GiMoneyStack size={25} />
                                    </div>


                                    <div className="mt-1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <h3 style={{ color: "white", fontSize: 13 }}>
                                            Widthdraw
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div style={{ width: 105, marginLeft: 5, marginRight: 5 }} >
                        <Link href="/pageroutesclient/loanapplication " style={{ color: "white", fontSize: 14 }}  >
                            <div style={{ marginTop: 40, backgroundColor: 'rgb(34, 139, 34)', borderRadius: 100, width:90, height: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <GiReceiveMoney size={25} />
                                    </div>


                                    <div className="mt-1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <h3 style={{ color: "white", fontSize: 13 }}>
                                            Apply Loan
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div style={{ width: 105, marginLeft: 5, marginRight:5 }} >
                        <Link href="/pageroutesclient/repayclient " style={{ color: "white", fontSize: 14 }}  >
                            <div style={{ marginTop: 40, backgroundColor: 'rgb(34, 139, 34)', borderRadius: 100, width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <MdOutlinePayments size={24} />
                                    </div>


                                    <div className="mt-1" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <h3 style={{ color: "white", fontSize: 13 }}>
                                            Repay Loan
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>

                </Row>

                {/* Active Projects  */}

                <Row className="my-6">

                    <div className="mt-0" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: 20, }}>
                        <div style={{ alignItems: 'center', justifyContent: 'center', display: "flex" }}>
                            <h3 style={{ fontSize: 20, marginTop: 20 }}>
                                Saving Status
                            </h3>
                        </div>

                        <div style={{ alignContent: 'center', justifyContent: 'center', display: "flex" }}>

                            <Row className="pb-1 mt-6" style={{ alignItems: 'center', justifyContent: 'center', display: "flex" }}>
                                <div class="flex items-center justify-center overflow-y-auto " style={{ height: 250, }}>

                                    <Row>
                                        {ProjectsStatsclient.map((item, index) => (
                                            <Col xl={4} lg={6} md={3} xs={8} className="mt-3" key={index}>
                                                <StatRightTopIcon info={item} />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Row>
                        </div>

                    </div>

                    <div className="mt-5" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', borderRadius: 20, }}>
                        <div style={{ alignItems: 'center', justifyContent: 'center', display: "flex" }}>
                            <h3 style={{ fontSize: 20, marginTop: 20 }}>
                                Loan  Status
                            </h3>
                        </div>

                        <div style={{ alignContent: 'center', justifyContent: 'center', display: "flex" }}>

                            <Row className="pb-1 mt-6" style={{ alignItems: 'center', justifyContent: 'center', display: "flex" }}>
                                <div class="flex items-center justify-center overflow-y-auto " style={{ height: 250, }}>

                                    <Row>
                                        {ProjectsStatsclientloan.map((item, index) => (
                                            <Col xl={4} lg={6} md={3} xs={8} className="mt-3" key={index}>
                                                <StatRightTopIcon info={item} />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <Col xl={12} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">

                        {/* Tasks Performance  */}
                        <ClientPerformance />

                    </Col>
                    {/* card  */}

                </Row>
            </Container>
        </Fragment>
    )
}


export default DashboardX2Client;