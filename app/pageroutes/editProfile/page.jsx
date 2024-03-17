'use client'
import React from 'react'
// import node module libraries

import Settings from '@/app/pages/settings'
import DefaultDashboardLayout from '@/layouts/DefaultDashboardLayout'

const EditProfileRoute = () => {

    return (
        <>

            <DefaultDashboardLayout>
                <Settings />
            </DefaultDashboardLayout>

        </>
    )
}


export default EditProfileRoute;