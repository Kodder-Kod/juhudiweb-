"use client"
import React, { useState, useEffect } from 'react';
import { firebase } from "../config";
import { db } from "../config";
import { ref, set, onValue, push, remove, update } from 'firebase/database';

import Admin from './admin/page';
import SignInclient from './authentication/sign-in-client';
import DashboadPageClient from './pageroutesclient/dashboardclient/page';

export default function Home() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    // If no user is signed in, render the SignIn component
    if (!user) {
        return <SignInclient />;
    }

    // If user is signed in, render the Admin component
    return <SignInclient />;
}
