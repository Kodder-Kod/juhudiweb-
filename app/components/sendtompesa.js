import React, { useState } from 'react';
import axios from 'axios';

const CoOpBankSendToMpesa = () => {
    const consumerKey = 'FNSS2ft6w5zsP5f3MkAADmGoFhAa';
    const consumerSecret = 'Ld189yqNfGMO_sc4AD3QkNoEyska';
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [transactionStatus, setTransactionStatus] = useState(null);
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

            return response.data.access_token;
        } catch (error) {
            setErrorMessage('Error generating token:', error.message);
            console.error(error);
            return null;
        }
    };

    const initiateTransfer = async () => {
        try {
            const token = await generateToken();
            if (!token) return;

            const requestPayload = {
                MessageReference: `pmDevMP_${Date.now()}`, // Generate unique reference
                CallBackUrl: 'https://55fa-197-237-155-251.ngrok-free.app', // Replace with your callback URL
                Source: {
                    AccountNumber: accountNumber,
                    Amount: amount,
                    TransactionCurrency: 'KES',
                    Narration: 'Payment to supplier',
                },
                Destinations: [
                    {
                        ReferenceNumber: `pmDevMP_${Date.now()}`, // Generate unique reference
                        MobileNumber: mobileNumber,
                        Amount: amount,
                        Narration: 'Payment to supplier',
                    },
                ],
            };

            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            };

            const response = await axios.post(
                'https://developer.co-opbank.co.ke:8243/FundsTransfer/External/A2M/Mpesa/v1.0.0',
                requestPayload,
                { headers }
            );

            setTransactionStatus(response.data);
        } catch (error) {
            setErrorMessage('Error initiating transfer:', error.message);
            console.error(error);
        }
    };


    return (


        <div style={{ marginBottom: 70, borderWidth: "2px" }} >

            <div style={{ margin: 30 }}>
                <h4>Co-op Bank Account to Mpesa Transfer</h4>
            </div>

            <form onSubmit={(e) => e.preventDefault()} style={{ margin: 10 }}>


                <div style={{ margin: 20 }}>
                    <label>
                        Account Number:
                        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                    </label>
                </div>
                <div style={{ margin: 20 }}>
                    <label>
                        Amount (KES):
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </label>
                </div>
                <div style={{ margin: 20 }}>
                    <label>
                        Mobile Number:
                        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    </label>
                </div>

                <button type="button" onClick={() => initiateTransfer()}>
                    Initiate Transfer
                </button>
            </form>
            {transactionStatus && (
                <div>
                    <h3>Transaction Status</h3>
                    <pre>{JSON.stringify(transactionStatus, null, 2)}</pre>
                </div>
            )}
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
};

export default CoOpBankSendToMpesa;