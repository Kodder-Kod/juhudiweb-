'use client'

import SaveClient from '@/app/clientpages/Saveclient'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const SaveClientPage = () => {

    return (
        <>
            <ClientnavLayout>
                <SaveClient/>
            </ClientnavLayout>

        </>
    )
}

export default SaveClientPage