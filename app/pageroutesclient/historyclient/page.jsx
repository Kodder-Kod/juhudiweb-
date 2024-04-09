'use client'

import HistoryClient from '@/app/clientpages/History'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const HistoryClientpage = () => {

    return (
        <>
            <ClientnavLayout>
                <HistoryClient/>
            </ClientnavLayout>

        </>
    )
}

export default HistoryClientpage;