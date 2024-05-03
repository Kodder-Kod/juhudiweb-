import {
   Briefcase,
   ListTask,
   People,
   Bullseye,
   CreditCard,
   Save,
   Upload
} from 'react-bootstrap-icons';
import { TbTargetArrow } from "react-icons/tb";
import { RxCalendar } from "react-icons/rx";
import { LiaPiggyBankSolid } from "react-icons/lia";

export const ProjectsStatsclient = [

   {
      id: 3,
      title: "Total Savings",
      value: '40,000',
      icon: < LiaPiggyBankSolid size={25} style={{ color: 'white' }} />,
      statInfo: '<span className="text-dark me-2"></span>Sum of total Savings',
      color: 'rgb(34, 139, 34)'
   },

   {
      id: 3,
      title: "Saving Target",
      value: '25,000',
      icon: <TbTargetArrow size={23} style={{ color: 'white' }} />,
      statInfo: '<span className="text-dark me-2"></span> Targeted Saving Amount',
      color: 'rgb(34, 139, 34)'
   },
   {
      id: 3,
      title: "Last Save date",
      value: '6th May 2024',
      icon: <RxCalendar size={20} style={{ color: 'white' }} />,
      statInfo: '<span className="text-dark me-2"></span>The last date you Deposited ',
      color: 'rgb(34, 139, 34)'
   },





];
export default ProjectsStatsclient;
