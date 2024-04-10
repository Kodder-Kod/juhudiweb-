import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';

export const LoanDataclient = [
    {
       id:1,
       title : "Total Loan Taken",
       value : '25,000',
       icon: <CreditCard size={18} style={{color:'black'}}/>,
       statInfo: '<span className="text-dark me-2"></span> Finacial Status ' ,
       color:'#e0dcfe'
    },
  
   
     {
        id:3,
        title : "Loan Limit",
        value : '250,000',
        icon: <Upload size={18} style={{color:'black'}}/>,
        statInfo: '<span className="text-dark me-2"></span>The maximun loan amount   ',
        color:'rgb(255, 36, 0)'
     },


     {
      id:3,
      title : "Due date",
      value : '6th May 2024',
      icon: <Upload size={18} style={{color:'black'}}/>,
      statInfo: '<span className="text-dark me-2"></span>The deadline date of payment ',
      color:'rgb(255, 36, 0)'
   },
];
export default LoanDataclient;
