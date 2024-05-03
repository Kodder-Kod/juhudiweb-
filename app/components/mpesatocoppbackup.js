// Import Axios
import axios from 'axios';
import React, { useState } from 'react';

const getToken = async () => {
    try {
        const secret = "Gx5L7Xt7KoJC9GG9gTXht0GXUZReUHivVKKyWTIQ2cxtKHmAdA6AJDOff6E6Wsgn";
        const consumer = "A9kWPyOfAP1QgbtkGfWiwMDUvEC6eqVAlQdwD8yY9zYInkT0";
        const auth = Buffer.from(`${consumer}:${secret}`).toString("base64");

        // Fetch access token using Axios
        const tokenResponse = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });

        const tokenData = tokenResponse.data;
        return tokenData.access_token;
    } catch (error) {
        console.error('Error fetching token:', error);
        throw error;
    }
};

const makeSTKPushRequest = async (token, tenje, totalPrice, businessNumber, biztype) => {
    try {
        const shortCode = businessNumber;
        const phone = tenje;
        const amount = totalPrice;
        const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
        const date = new Date();
        const timestamp = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}${("0" + date.getHours()).slice(-2)}${("0" + date.getMinutes()).slice(-2)}${("0" + date.getSeconds()).slice(-2)}`;
        const password = Buffer.from(shortCode + passkey + timestamp).toString("base64");

        const data = {
            BusinessShortCode: shortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: `${biztype}`,
            Amount: amount,
            PartyA: `254${phone}`,
            PartyB: shortCode,
            PhoneNumber: `254${phone}`,
            CallBackURL: "https://mydomain.com/path", // Change this to your desired domain
            AccountReference: shortCode,
            TransactionDesc: "Testing stk push",
        };

        // Make STK push request using Axios
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error making STK push request:', error);
        throw error;
    }
};

const MpesatoCoop = () => {
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
        <div style={{ margin: 30 }}>
            <h4> Mpesa to Co-op bank </h4>
            <form onSubmit={handleSubmit}>
                <div style={{ margin: 30 }}>
                    <input type="text" value={businessNumber} onChange={(e) => setBusinessNumber(e.target.value)} placeholder="Business Number" />
                </div>
                <div style={{ margin: 30 }}>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
                </div>
                <div style={{ margin: 30 }}>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default MpesatoCoop;