/**
 * The folder sub-components contains sub component of all the pages,
 * so here you will find folder names which are listed in root pages.
 */

// sub components for /pages/dashboard
import ClientPerformance from './dashboard/clientperfomance';
import HistoryDash from './dashboard/Historydash';

// sub components for /pages/savepage



import SavehistoryClient from './savepage/Savehistoryclient';
import SavingPerformanceClient from './savepage/Saveperfomanceclient';


// sub components for /pages/loanpage

import ClientLoanAnalysis from './loanpage/ClientloanAnalysis';
import LoanHistoryClient from './loanpage/Loanhistoryclient';


// sub components for /pages/history

import TransHistory from './Transacations/History';

// sub components for /pages/profile
import AboutMe from '../sub-components/profile/AboutMe';
import ActivityFeed from '../sub-components/profile/ActivityFeed';
import MyTeam from '../sub-components/profile/MyTeam';
import ProfileHeader from '../sub-components/profile/ProfileHeader';
import ProjectsContributions from '../sub-components/profile/ProjectsContributions';
import RecentFromBlog from '../sub-components/profile/RecentFromBlog';

// sub components for /pages/billing
import CurrentPlan from '../sub-components/billing/CurrentPlan';
import BillingAddress from '../sub-components/billing/BillingAddress';

// sub components for /pages/settings
import DeleteAccount from '../sub-components/settings/DeleteAccount';
import EmailSetting from '../sub-components/settings/EmailSetting';
import GeneralSetting from '../sub-components/settings/GeneralSetting';
import Notifications from '../sub-components/settings/Notifications';
import Preferences from '../sub-components/settings/Preferences';


export {
   ClientPerformance,
   HistoryDash,

   ClientLoanAnalysis,
   LoanHistoryClient,


   TransHistory,

   SavehistoryClient,
   SavingPerformanceClient,


   AboutMe,
   ActivityFeed,
   MyTeam,
   ProfileHeader,
   ProjectsContributions,
   RecentFromBlog,

   CurrentPlan,
   BillingAddress,

   DeleteAccount,
   EmailSetting,
   GeneralSetting,
   Notifications,
   Preferences
};
