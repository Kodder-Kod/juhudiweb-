'use client'

import DepositPage from '@/app/clientpages/depositpage'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const DepositClientpage = () => {

    return (
        <>
            <ClientnavLayout>
             <DepositPage/>
            </ClientnavLayout>

        </>
    )
}

export default DepositClientpage;