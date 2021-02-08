/*!
This file is used to create routes that will then populate the navbar on the left hand side of the app
*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import TableChartIcon from '@material-ui/icons/TableChart';
import ExitToApp from '@material-ui/icons/ExitToApp';

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

// My own components and views

import SignUp from "views/SignUp/Signup";
import Finance from "views/Finance/Finance";
import BigTable from "views/BigTable/BigTable"

const dashboardRoutes = [
  {
    path: "/Finance",
    name: "Finance",
    icon: MonetizationOnIcon,
    component: Finance,
    layout: "/admin"
  },
   {
    path: "/signup",
    name: "Signup",
    icon: ExitToApp,
    component: SignUp,
    layout: "/admin"
  },
  {
    path: "/bigtable",
    name: "BigTable",
    icon: TableChartIcon,
    component: BigTable,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Multi Table",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }
 
];

export default dashboardRoutes;
