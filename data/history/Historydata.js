import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';

export const HistoryData = [
    {
       id:1,
       title : "Account Balance",
       value : '100,000',
       icon: <CreditCard size={18} style={{color:'black'}}/>,
       statInfo: '<span className="text-dark me-2"></span> Finacial Status ' ,
       color:'#e0dcfe'
    },
  
     {
        id:2,
        title : "Total Savings",
        value : '40,000',
        icon: <Save size={18} style={{color:'black'}}/>,
        statInfo: '<span className="text-dark me-2"></span>Sum of total Savings' ,
        color:'rgb(124, 252, 0)'
     },
     {
        id:3,
        title : "Total Loans",
        value : '25,000',
        icon: <Upload size={18} style={{color:'black'}}/>,
        statInfo: '<span className="text-dark me-2"></span> Sum of total Loans',
        color:'rgb(255, 36, 0)'
     }
];
export default HistoryData;
