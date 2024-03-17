'use client'
import React from 'react'
// import node module libraries


import DashboardX2 from '@/app/pages/Dashboard'
import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'

const DashboadRoute = () => {

    return (
        <>

            <DefaultDashboardLayout>
                <DashboardX2 />
            </DefaultDashboardLayout >
        </>
    )
}


export default DashboadRoute;