'use client'

import HistoryClient from '@/app/clientpages/History'
import CoOpBankTransfer from '@/app/components/test'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const HistoryClientpage = () => {



    return (
        <>
{/**  <CoOpBankTransfer/> */}

            <ClientnavLayout>
                <HistoryClient/>
            </ClientnavLayout>

        </>
    )
}

export default HistoryClientpage;