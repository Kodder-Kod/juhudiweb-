'use client'
import React from 'react'
import Link from 'next/link.js';
import { useRouter } from 'next/router';


// import node module libraries

import DashboardX2 from '../pages/Dashboard.js';
import Profile from '../pages/profile.js';
import Settings from '../pages/settings.js';
import Billing from '../pages/billing.js';
import Pricing from '../pages/pricing.js';
import Error404 from '../404.js';
import ForgetPassword from '../authentication/forget-password.js';
import SignIn from '../authentication/sign-In.js';
import SignUp from '../authentication/sign-up.js';

import DefaultDashboardLayout from '../../layouts/DefaultDashboardLayout.js';
import Save from '../pages/SavePage.js';
import Loan from '../pages/LoanPage.js';
import History from '../pages/History.js';
import People from '../pages/People.js';




const Admin = () => {




    /**
     *  <DashboardX2/>
                <People/>
                <Save/>
                <Loan/>
                <History/>
                <Profile/>
                <Settings/>
                <Billing/>
                <Pricing/>
                <Error404/>
                <ForgetPassword/>
                <SignIn/>
                <SignUp/>

     * 
     */

    return (
        <>
            <DefaultDashboardLayout>
                <DashboardX2 />
            </DefaultDashboardLayout>
        </>
    )
}

export default Admin;