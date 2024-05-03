import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';
import { BsStoplights } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";

export const LoanData  = [
    {
       id:1,
       title : "Total Loan Taken",
       value : '25,000',
       icon: <GiReceiveMoney size={25} style={{color:'white'}}/>,
       statInfo: '<span className="text-dark me-2"></span> Finacial Status ' ,
       color:'rgb(255, 36, 0)'
    },
    {
        id:2,
        title : "Borrowers",
        value : '10',
        icon: <People size={18} style={{color:'white'}}/>,
        statInfo: '<span className="text-dark me-2"></span> People who have loans' ,
        color:'rgb(0, 150, 255)'
     },
   
     {
        id:3,
        title : "Loan Limit",
        value : '250,000',
        icon: <BsStoplights size={18} style={{color:'white'}}/>,
        statInfo: '<span className="text-dark me-2"></span>The loan  ',
        color:'rgb(255, 36, 0)'
     }
];
export default LoanData;
