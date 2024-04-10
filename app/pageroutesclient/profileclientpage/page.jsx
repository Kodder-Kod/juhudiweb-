'use client'


import ProfileClient from '@/app/clientpages/Profileclient'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const LoanClientPage = () => {

    return (
        <>
            <ClientnavLayout>
                <ProfileClient/>
            </ClientnavLayout>

        </>
    )
}

export default LoanClientPage