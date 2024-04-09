'use client'

import DashboardX2Client from '@/app/clientpages/Dashboardclient'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const DashboadPageClient = () => {

    return (
        <>
            <ClientnavLayout>
                <DashboardX2Client/>
            </ClientnavLayout>

        </>
    )
}

export default DashboadPageClient 