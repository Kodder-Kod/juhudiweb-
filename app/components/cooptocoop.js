import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoOpBankApiInternal = () => {
    const [token, setToken] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [transferResponse, setTransferResponse] = useState(null);
    const [sourceAccountNumber, setSourceAccountNumber] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [destinationAccountNumber, setDestinationAccountNumber] = useState('');
    const [transactionStatus, setTransactionStatus] = useState(null);
    const consumerKey = 'FNSS2ft6w5zsP5f3MkAADmGoFhAa';
    const consumerSecret = 'Ld189yqNfGMO_sc4AD3QkNoEyska';




    const fetchAccessToken = async () => {
        try {
          const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
          const response = await axios.post('https://developer.co-opbank.co.ke:8243/token', 'grant_type=client_credentials', {
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
      

    const initiateTransfer = async () => {

        const token=fetchAccessToken();

        if (!token) {
            return setErrorMessage('Please fetch access token first');
        }

        const requestPayload = {
            MessageReference: 'your_unique_message_reference', // Replace with your unique reference
            CallBackUrl: 'https://yourdomain.com/ftresponse', // Replace with your callback URL
            Source: {
                AccountNumber: sourceAccountNumber,
                Amount: transferAmount,
                TransactionCurrency: 'KES',
                Narration: 'Supplier Payment'
            },
            Destinations: [
                {
                    ReferenceNumber: 'your_destination_reference', // Replace with your destination reference
                    AccountNumber: destinationAccountNumber,
                    BankCode: '011',
                    BranchCode: '00011001',
                    Amount: transferAmount,
                    TransactionCurrency: 'KES',
                    Narration: 'Electricity Payment'
                }
            ]
        };

        try {
            const response = await axios.post('https://developer.co-opbank.co.ke:8243/FundsTransfer/Internal/2.0.0/SendToAccount', requestPayload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setTransferResponse(response.data);
        } catch (error) {
            setErrorMessage('Error initiating transfer');
            console.error(error);
        }
    };

    return (
        <div style={{ marginBottom: 70, borderWidth: "2px" }}>
            <div style={{ margin: 30 }}>
                <h4>Co-op to Co-op   Internal Funds Transfer  </h4>
            </div>
            <form onSubmit={(e) => e.preventDefault()} style={{ margin: 10 }}>
                <div style={{ margin: 20 }}>
                    <label>
                        Source Account Number:
                        <input type="text" value={sourceAccountNumber} onChange={(e) => setSourceAccountNumber(e.target.value)} />
                    </label>
                </div>
                <div style={{ margin: 20 }}>
                    <label>
                        Transfer Amount (KES):
                        <input type="number" value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} />
                    </label>
                </div>
                <div style={{ margin: 20 }}>
                    <label>
                        Destination Account Number:
                        <input type="text" value={destinationAccountNumber} onChange={(e) => setDestinationAccountNumber(e.target.value)} />
                    </label>
                </div>
                <button type="button" onClick={() => initiateTransfer()}>
                    Initiate Transfer
                </button>
            </form>
            {transferResponse && (
                <div  style={{margin : 10   , borderRadius: 20}}>
                    <h3>Transfer Response</h3>
                    <pre>{JSON.stringify(transferResponse, null, 2)}</pre>
                </div>
            )}
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
};

export default CoOpBankApiInternal;
