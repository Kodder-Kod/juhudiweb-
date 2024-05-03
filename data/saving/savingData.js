import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';
import { LiaPiggyBankSolid } from "react-icons/lia";
import { TbTargetArrow } from "react-icons/tb";

export const SavingData = [
    {
       id:1,
       title : "Total Saving",
       value : '40,000',
       icon: <LiaPiggyBankSolid size={25} style={{color:'white'}}/>,
       statInfo: '<span className="text-dark me-2"></span> Sum of total Saving ' ,
       color:'rgb(34, 139, 34)'
    },
    {
        id:2,
        title : "Depositors " ,
        value : '10',
        icon: <People size={18} style={{color:'white'}}/>,
        statInfo: '<span className="text-dark me-2"></span> Members who have Saved' ,
        color:'rgb(0, 150, 255)'
     },
    
     {
        id:3,
        title : "Saving Target",
        value : '25,000',
        icon: <TbTargetArrow size={22} style={{color:'white'}}/>,
        statInfo: '<span className="text-dark me-2"></span> Targeted Saving Amount',
        color: 'rgb(34, 139, 34)'
     }
];
export default SavingData;
