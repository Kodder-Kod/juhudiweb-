import React from 'react';
import CoOpBankSendToMpesa from './sendtompesa';
import CoOpBankApiInternal from './cooptocoop';
import CoOpBankBalance from './accountbalance';
import CoOpBankApiTrans from './transactions';
import MpesatoCoop from './mpesatocoop';


const CoOpBankTransfer = () => {

    return (
        <>

            <div style={{ margin: 10, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <h3 > Base ya payment testing</h3>
            </div>

            <CoOpBankSendToMpesa />
            <CoOpBankApiInternal />
            <CoOpBankBalance />
            <CoOpBankApiTrans />
            <MpesatoCoop />

        </>



    );
};

export default CoOpBankTransfer;