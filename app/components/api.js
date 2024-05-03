"use client"
// Import Axios
import axios from 'axios';
import { Buffer } from 'buffer';



const mpesaFun = (phoneNumber,totalPrice, businessNumber, biztype) => {

    if (totalPrice) {//// put type of total price not interger not accept 

        try {
            if (phoneNumber == null || phoneNumber == undefined || phoneNumber == "") {

                console.log("null worked")
             

            }

            else if (phoneNumber[0] == "0") {

                const tenje = phoneNumber.slice(1)
                const calltoken = tokenFunc(tenje, totalPrice, businessNumber, biztype)

            }

            else if (phoneNumber[0] == "+" && phoneNumber[1] == "2" && phoneNumber[2] == "5" && phoneNumber[3] == "4") {

                const tenje = phoneNumber.slice(4)
                const calltoken = tokenFunc(tenje, totalPrice, businessNumber, biztype)

            }

            else if (phoneNumber[0] == "2" && phoneNumber[1] == "5" && phoneNumber[2] == "4") {

                const tenje = phoneNumber.slice(3)
                const calltoken = tokenFunc(tenje, totalPrice, businessNumber, biztype)

            }

            else {

                const calltoken = tokenFunc(phoneNumber, totalPrice, businessNumber, biztype)
            }
        } catch {
            console.log ('ngori')
        }
    } else {
       console.log ('ngori')
    }
}



const tokenFunc = async (tenje, totalPrice, businessNumber, biztype) => {
    try {
        const secret = "Gx5L7Xt7KoJC9GG9gTXht0GXUZReUHivVKKyWTIQ2cxtKHmAdA6AJDOff6E6Wsgn";
        const consumer = "A9kWPyOfAP1QgbtkGfWiwMDUvEC6eqVAlQdwD8yY9zYInkT0";
        const auth = btoa(`${consumer}:${secret}`);

        const authResponse = await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
            method: "GET",
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const authData = await authResponse.json();
        const tokenvar = authData.access_token;

        const shortCode = businessNumber;
        const phone = tenje;
        const amount = totalPrice;
        const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919"
        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
        const date = new Date();
        const timestamp = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}${("0" + date.getHours()).slice(-2)}${("0" + date.getMinutes()).slice(-2)}${("0" + date.getSeconds()).slice(-2)}`;
        const password = btoa(shortCode + passkey + timestamp);

        const data = {
            BusinessShortCode: shortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: `${biztype}`,
            Amount: amount,
            PartyA: `254${phone}`,
            PartyB: shortCode,
            PhoneNumber: `254${phone}`,
            CallBackURL: "https://mydomain.com/path",
            AccountReference: shortCode,
            TransactionDesc: "Testing stk push",
        };

        console.log(tokenvar);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${tokenvar}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        console.log(JSON.stringify(responseData), 'callback'); 
    }
    catch (error) {
        console.error(error);
    }
};


export default function Page({ stkResponse }) {
    return (
        <main>
            <p>STK Push Response: {JSON.stringify(stkResponse)}</p>
        </main>
    )
}

export async function getServerSideProps(phoneNumber, amount, businessNumber, biztype) {
    // Fetch data from external API
    try {


        // Make STK push request
        const stkResponse = await mpesaFun(phoneNumber, amount, businessNumber, biztype);

        // Pass data to the page via props
        return { props: { stkResponse } };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { error: 'Failed to fetch data' } };
    }
}



