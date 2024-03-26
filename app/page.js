"use client"
import React, { useState, useEffect } from 'react'

import { firebase } from "../config"
import { db } from "../config";
import { ref, set, onValue, push, remove, update } from 'firebase/database';
// import node module libraries


import SignIn from './authentication/sign-In'
import Admin from './admin/page'
import SignUp from './authentication/sign-up'
import ForgetPassword from './authentication/forget-password'
import Pricing from './pages/pricing';
import Profile from './pages/profile';
import Settings from './pages/settings';
import EditProfileRoute from './pageroutes/editProfile/page';


export default function Home() {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


    function onAuthStateChanged(user) {
        setUser(user);

        if (initializing) setInitializing(false)
    }

    useEffect(() => {

        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)

        return subscriber

    }, [])

    if (initializing) return null;


/////if sign in 

    return (
        <>
            <Admin/>
     
        </>
    )

}
