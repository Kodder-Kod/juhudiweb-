'use client'
import React from 'react'
// import node module libraries

import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'
import LoanApplicant from '@/app/pages/Loanapplicants'


const LoanRoute = () => {

    return (
        <>
            <DefaultDashboardLayout>
                <LoanApplicant />
            </DefaultDashboardLayout>
        </>
    )
}


export default LoanRoute;