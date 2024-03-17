import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';

export const PeopleData = [
    
     
    {
        id:1,
        title : "All People",
        value : '10',
        icon: <People size={18} style={{color:'black'}}/>,
       
        color:'rgb(0, 150, 255)',
        bgcolor:'rgb(255, 255,255)'
     },
     {
        id:2,
        title : "Depositors",
        value : '7',
        icon: <Save size={18} style={{color:'black'}}/>,
       
        color:'rgb(124, 252, 0)',
        bgcolor:'rgb(124, 252, 0,0.8)'
     },
     {
        id:3,
        title : "Borrowers",
        value : '3',
        icon: <Upload size={18} style={{color:'black'}}/>,

        color:'rgb(255, 36, 0)',
        bgcolor:'rgb(255, 36, 0,0.8)'
     }
];
export default PeopleData;
