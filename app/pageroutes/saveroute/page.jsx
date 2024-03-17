'use client'
import React from 'react'
// import node module libraries


import Save from '@/app/pages/SavePage'
import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'


const SaveRoute = () => {

    return (
        <>

            <DefaultDashboardLayout>
                <Save />
            </DefaultDashboardLayout>
        </>
    )
}


export default SaveRoute;