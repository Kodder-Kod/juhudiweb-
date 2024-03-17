'use client'
import React from 'react'
// import node module libraries


import History from '@/app/pages/History'
import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'


const HistoryRoute = () => {

    return (
        <>

            <DefaultDashboardLayout>
                <History />
            </DefaultDashboardLayout>
        </>
    )
}


export default HistoryRoute;