'use client'

import RepayPage from '@/app/clientpages/repayclient'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const RepayClientPage = () => {

    return (
        <>
            <ClientnavLayout>
                <RepayPage/>
            </ClientnavLayout>

        </>
    )
}

export default RepayClientPage