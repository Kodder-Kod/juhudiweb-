'use client'
import ContactClient from '@/app/clientpages/Contact'
import ClientnavLayout from '@/layouts/Clientnavlayout'
import React from 'react'
// import node module libraries


const ContactClientPage = () => {

    return (
        <>
            <ClientnavLayout>
                <ContactClient/>
            </ClientnavLayout>

        </>
    )
}

export default ContactClientPage