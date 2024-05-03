import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoOpBankBalance = () => {
    const consumerKey = 'FNSS2ft6w5zsP5f3MkAADmGoFhAa';
    const consumerSecret = 'Ld189yqNfGMO_sc4AD3QkNoEyska';
    const [accountNumber, setAccountNumber] = useState('');
    const [token, setToken] = useState(null);
    const [balanceData, setBalanceData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const generateToken = async () => {
        try {
            const authorization = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
            const headers = { Authorization: `Basic ${authorization}` };
            const content = 'grant_type=client_credentials';

            const response = await axios.post(
                'https://developer.co-opbank.co.ke:8243/token',
                content,
                { headers }
            );

            setToken(response.data.access_token);
        } catch (error) {
            setErrorMessage('Error generating token:', error.message);
            console.error(error);
        }
    };

    const fetchBalance = async () => {
        try {

            const token = generateToken();
            if (!token) {

                return; // Handle failed token generation
            }

            const requestPayload = {
                MessageReference: Math.random().toString(36).substring(2, 15), // Generate unique reference
                AccountNumber: accountNumber,
            };

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.post(
                'https://developer.co-opbank.co.ke:8243/Enquiry/AccountBalance/1.0.0/Account',
                requestPayload,
                { headers }
            );

            setBalanceData(response.data);
        } catch (error) {
            setErrorMessage('Error fetching balance:', error.message);
            console.error(error);
        }
    };



    return (
        <div style={{margin:30}}>
            <h4>Co-Op Bank Account Balance Enquiry</h4>
            <form onSubmit={(e) => e.preventDefault()}>

                <div style={{ margin: 10 }}>
                    <label>
                        Account Number:
                        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                    </label>
                </div>

                <div style={{ margin: 10 }}>
                    <button type="button" onClick={fetchBalance} disabled={!consumerKey || !consumerSecret || !accountNumber}>
                        Fetch Balance
                    </button>
                </div>

            </form>
            {balanceData && (
                <div>
                    <h3>Account Balance</h3>
                    <pre>{JSON.stringify(balanceData, null, 2)}</pre>
                </div>
            )}
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
};

export default CoOpBankBalance;
