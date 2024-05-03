'use client'


import WithdrawPage from '@/app/clientpages/withdraw'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const Withdrawclient = () => {

    return (
        <>
            <ClientnavLayout>
             <WithdrawPage/>
            </ClientnavLayout>

        </>
    )
}

export default Withdrawclient;