'use client'

import LoanClient from '@/app/clientpages/Loanclient'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const LoanClientPage = () => {

    return (
        <>
            <ClientnavLayout>
                <LoanClient/>
            </ClientnavLayout>

        </>
    )
}

export default LoanClientPage