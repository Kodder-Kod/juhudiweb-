import {
	Briefcase,
    ListTask,
    People,
    Bullseye,
    CreditCard,
    Save,
    Upload
} from 'react-bootstrap-icons';
import { GiReceiveMoney } from "react-icons/gi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsStoplights } from "react-icons/bs";
export const ProjectsStatsclientloan = [

     {
        id:4,
        title : "Total Loans",
        value : '25,000',
        icon: <GiReceiveMoney size={22} style={{color:'white'}}/>,
        statInfo: '<span className="text-dark me-2"></span> Sum of total Loans',
        color:'rgb(255, 36, 0)'
     },
     
     {
      id:3,
      title : "Loan Limit",
      value : '250,000',
      icon: <BsStoplights size={22} style={{color:'white'}}/>,
      statInfo: '<span className="text-dark me-2"></span>The maximun loan amount   ',
      color:'rgb(255, 36, 0)'
   },
   {
      id:3,
      title : "Due date",
      value : '6th May 2024',
      icon: <IoCalendarNumberOutline size={22} style={{color:'white'}}/>,
      statInfo: '<span className="text-dark me-2"></span>The deadline date of payment ',
      color:'rgb(255, 36, 0)'
   },


 

];
export default ProjectsStatsclientloan;
