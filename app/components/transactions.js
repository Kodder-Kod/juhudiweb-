import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoOpBankApiTrans = () => {
    const [token, setToken] = useState(null);
    const [accountInfo, setAccountInfo] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const consumerKey = 'FNSS2ft6w5zsP5f3MkAADmGoFhAa';
    const consumerSecret = 'Ld189yqNfGMO_sc4AD3QkNoEyska';


    const tokenEndpoint = 'https://developer.co-opbank.co.ke:8243/token';
    const accountEndpoint = 'https://developer.co-opbank.co.ke:8243/Enquiry/AccountTransactions/1.0.0/Account';

    const fetchAccessToken = async () => {
        try {
            const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
            const response = await axios.post(tokenEndpoint, 'grant_type=client_credentials', {
                headers: {
                    Authorization: `Basic ${credentials}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            setToken(response.data.access_token);
        } catch (error) {
            setErrorMessage('Error fetching access token');
            console.error(error);
        }
    };

    const fetchAccountInfo = async () => {

        const token = fetchAccessToken();

        if (!token) {
            return;
        }

        try {
            const requestPayload = {
                MessageReference: 'your_unique_message_reference',
                AccountNumber: 'your_account_number'
            };
            const response = await axios.post(accountEndpoint, requestPayload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setAccountInfo(response.data);
        } catch (error) {
            setErrorMessage('Error fetching account information');
            console.error(error);
        }
    };


    return (
        <div style={{ margin: 30 }}>
            <h4>Co-op Bank Transactions</h4>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button onClick={fetchAccountInfo}>Fetch Account Information</button>

            {accountInfo && (
                <pre>{JSON.stringify(accountInfo, null, 2)}</pre>
            )}
        </div>
    );
};

export default CoOpBankApiTrans;
