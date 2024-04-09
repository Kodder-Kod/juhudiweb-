import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';

export const SavingDataClient = [
    {
       id:1,
       title : "Total Saving",
       value : '40,000',
       icon: <CreditCard size={18} style={{color:'black'}}/>,
       statInfo: '<span className="text-dark me-2"></span> Sum of total Saving ' ,
       color:'#e0dcfe'
    },

    
     {
        id:3,
        title : "Saving Target",
        value : '25,000',
        icon: <Upload size={18} style={{color:'black'}}/>,
        statInfo: '<span className="text-dark me-2"></span> Targeted Saving Amount',
        color: 'rgb(34, 139, 34)'
     }
];
export default SavingDataClient;
