'use client'
import React from 'react'
// import node module libraries


import People from '@/app/pages/People'
import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'


const PeopleRoute = () => {

    return (
        <>
            <DefaultDashboardLayout>
                <People />
            </DefaultDashboardLayout>
        </>
    )
}


export default PeopleRoute;