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
import { GiReceiveMoney } from "react-icons/gi";
export const PeopleData = [
    
     
    {
        id:1,
        title : "All People",
        value : '10',
        icon: <People size={18} style={{color:'white'}}/>,
       
        color:'rgb(0, 150, 255)',
        bgcolor:'rgb(255, 255,255)'
     },
     {
        id:2,
        title : "Depositors",
        value : '7',
        icon: < LiaPiggyBankSolid size={18} style={{color:'white'}}/>,
       
        color:'rgb(34, 139, 34)',
        bgcolor:'rgb(34, 139, 34)'
     },
     {
        id:3,
        title : "Borrowers",
        value : '3',
        icon: <GiReceiveMoney  size={22} style={{color:'white'}}/>,

        color:'rgb(255, 36, 0)',
        bgcolor:'rgb(255, 36, 0,0.8)'
     }
];
export default PeopleData;
