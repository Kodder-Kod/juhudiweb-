'use client'
import React from 'react'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "../../widgets/index.js";

// import sub components
import {HistoryDash, ClientPerformance } from "../../sub-components/indexclient.js";

// import required data files
import ProjectsStatsclient from '@/data/dashboard/projectclient.js';


const DashboardX2Client = () => {
    return (
        <Fragment>
            <div className="pt-10 pb-21" style={{ backgroundColor: '#584696' }}></div>
            <Container fluid className="mt-n22 px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Dashboard </h3>
                                </div>
                                {/* <div>
                                    <Link href="#" className="btn btn-white">Create New Project</Link>
                                </div> */}
                            </div>
                        </div>
                    </Col>
                    {ProjectsStatsclient.map((item, index) => {
                        return (
                            <Col xl={3} lg={6} md={12} xs={12} className="mt-6" key={index}>
                                <StatRightTopIcon info={item} />
                            </Col>
                        )
                    })}
                </Row>

                {/* Active Projects  */}


                <Row className="my-6">
                    <Col xl={7} lg={12} md={12} xs={12}>

                        {/* Teams  */}
                        <HistoryDash/>

                    </Col>
                    <Col xl={5} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">

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