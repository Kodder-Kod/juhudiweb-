'use client'
import ContactClientpage from '@/app/clientpages/contactclient'

import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const ContactClientPage = () => {

    return (
        <>
            <ClientnavLayout>
                <ContactClientpage/>
            </ClientnavLayout>

        </>
    )
}

export default ContactClientPage