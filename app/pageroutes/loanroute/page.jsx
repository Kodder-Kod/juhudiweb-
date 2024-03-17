'use client'
import React from 'react'
// import node module libraries


import Loan from '@/app/pages/LoanPage'
import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'


const LoanRoute = () => {

    return (
        <>
            <DefaultDashboardLayout>
                <Loan />
            </DefaultDashboardLayout>
        </>
    )
}


export default LoanRoute;