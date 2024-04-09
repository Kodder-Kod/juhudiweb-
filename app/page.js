"use client"
import React, { useState, useEffect } from 'react';
import { firebase } from "../config";
import { db } from "../config";
import { ref, set, onValue, push, remove, update } from 'firebase/database';
import SignIn from './authentication/sign-In';
import Admin from './admin/page';

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
        return <SignIn />;
    }

    // If user is signed in, render the Admin component
    return <Admin />;
}
