
"use client"

import React, { useState, useEffect } from 'react';
import { firebase } from '../config';
import SignIn from './authentication/sign-In';
import Admin from './admin/page';

export default function Home() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            if (initializing) {
                setInitializing(false);
            }
        });

        return () => unsubscribe();
    }, [initializing]);

    if (initializing) {
        return null; // or loading indicator
    }

    if (!user) {
        return <SignIn />;
    }

    return <Admin />;
}