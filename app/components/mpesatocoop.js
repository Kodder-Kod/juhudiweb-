// UIComponent.js

import React, { useState } from 'react';
import { getToken, makeSTKPushRequest } from './api';

export default function UIComponent() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [businessNumber, setBusinessNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const token = await getToken();
            await makeSTKPushRequest(token, phoneNumber, amount, businessNumber, 'biztype'); // Replace 'biztype' with your actual transaction type
            // Reset input fields
            setPhoneNumber('');
            setAmount('');
            setBusinessNumber('');
        } catch (error) {
            console.error(error);
            // Reset input fields
            setPhoneNumber('');
            setAmount('');
            setBusinessNumber('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
                <input type="text" value={businessNumber} onChange={(e) => setBusinessNumber(e.target.value)} placeholder="Business Number" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
