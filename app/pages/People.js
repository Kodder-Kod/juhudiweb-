'use client'
import React from 'react'
// import node module libraries
import { Fragment } from "react";
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { StatRightTopIcon } from "../../widgets/index.js";

// import sub components
import { AllMembers } from "../../sub-components/index.js";

// import required data files

import PeopleData from '@/data/people/peopleData.js';
import PeopleDashboard from '@/widgets/stats/peopleDashboard.js';
import { Label } from 'recharts';

import { Pie, PieChart,  ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, AreaChart, Area } from 'recharts';


const People = () => {

    const data01 = [
        {
            "name": "Group A",
            "value": 10
        },

    ];


    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      
    return (

        <Fragment>
            <div className="pt-10 pb-21" style={{ backgroundColor: 'rgb(0, 150, 255)' }}></div>



            <Container fluid className="mt-n22 px-6">

                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mb-2 mb-lg-0">
                                    <h3 className="mb-0  text-white">Members</h3>
                                </div>
                                {/* <div>
                                    <Link href="#" className="btn btn-white">Create New Project</Link>
                                </div> */}
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="my-6">

                    <Col xl={10} lg={12} md={12} xs={12}>

                        <AllMembers />
                    </Col>





                    <Col xl={2} lg={12} md={12} xs={12} style={{ marginleft: 10 }} >
                        {PeopleData.map((item, index) => {
                            return (

                                <>
                                    <div style={{ marginTop: 10 }}>
                                        <PeopleDashboard info={item} />
                                    </div>

                                </>
                            )
                        })}


                    </Col>
                </Row>
            </Container>
        </Fragment>
    )

}

export default People;