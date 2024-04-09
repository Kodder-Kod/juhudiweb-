'use client'
import React from 'react'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "../../widgets/index.js";

// import sub components
import {SavehistoryClient, SavingPerformanceClient } from "../../sub-components/indexclient.js";

// import required data files


import SaveDashboard from '@/widgets/stats/saveDashboard.js';
import SavingDataClient from '@/data/saving/SavingDataclient.js';




const SaveClient = () => {

    return (
        <Fragment>
            <div className="pt-10 pb-21" style={{ backgroundColor: 'rgb(34, 139, 34)' }}></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Saving Page </h3>
                                </div>
                                {/* <div>
                                    <Link href="#" className="btn btn-white">Create New Project</Link>
                                </div> */}
                            </div>
                        </div>
                    </Col>

                </Row>

                <Row className="my-6">

                    <Col xl={3} lg={12} md={12} xs={12} >
                        {SavingDataClient.map((item, index) => {
                            return (
                                <div  key={index}  style={{ marginTop: 10 }}>
                                    <SaveDashboard info={item} />
                                </div>
                            )
                        })}
                    </Col>
                    {/* card  */}
                    <Col xl={9} lg={12} md={12} xs={12}>

                        <div>

                            <SavingPerformanceClient />
                            <div style={{marginTop:10}}>
                                <SavehistoryClient />
                            </div>


                        </div>


                    </Col>


                </Row>
            </Container>
        </Fragment>
    )

}

export default SaveClient;