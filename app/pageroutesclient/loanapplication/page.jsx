'use client'

import LoanApplication from '@/app/clientpages/loanapplication'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const LoanApplicationClientpage = () => {

    return (
        <>
            <ClientnavLayout>
             <LoanApplication/>
            </ClientnavLayout>

        </>
    )
}

export default LoanApplicationClientpage;