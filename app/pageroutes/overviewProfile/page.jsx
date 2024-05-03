'use client'
import React from 'react'
// import node module libraries

import Profile from '@/app/pages/profile'
import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'

const OverviewProfileRoute = () => {

    return (
        <>
            <DefaultDashboardLayout>
                <Profile />
            </DefaultDashboardLayout>

        </>
    )
}


export default OverviewProfileRoute;