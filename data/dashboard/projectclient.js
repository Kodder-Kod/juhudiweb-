import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';

export const ProjectsStatsclient = [

     {
        id:3,
        title : "Total Savings",
        value : '40,000',
        icon: <Save size={18} style={{color:'black'}}/>,
        statInfo: '<span className="text-dark me-2"></span>Sum of total Savings' ,
        color:'rgb(124, 252, 0)'
     },
     {
        id:4,
        title : "Total Loans",
        value : '25,000',
        icon: <Upload size={18} style={{color:'black'}}/>,
        statInfo: '<span className="text-dark me-2"></span> Sum of total Loans',
        color:'rgb(255, 36, 0)'
     }
];
export default ProjectsStatsclient;
