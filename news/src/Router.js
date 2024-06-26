import Dashboard from './Components/Dashboard/Dashboard';
import AddFeed from './Components/Dashboard/Add';
import Add from "./Components/Users/Add";
import UserList from "./Components/Users/UserList";
import ManageUserList from './Components/UserMangement/Listing'
import Live from './Components/Live/Live';
const routes = [
  {
    title: "Feeds",
    icons: "fa-rss",
    path: 'Feed',
    element: <Dashboard />,
    children: ['add', 'edit', 'view'],
    sidebar: true
  },
  {
    title: "Users",
    icons: "fa-user-group",
    path: 'User',
    element: <UserList />,
    children: ['addAdd'],
    sidebar: true
  },
  {
    title: "Manage User",
    icons: "fa-user-group",
    path: 'ManageUser',
    element: <ManageUserList />,
    children: [],
    sidebar: true
  },
  {
    title: "User Feedback",
    icons: "fa-user-group",
    path: 'feedback',
    element: <ManageUserList />,
    children: [],
    sidebar: true
  },
  
  {
    title: "Live",
    icons: "fa-user-group",
    path: 'live',
    element: <Live />,
    children: [],
    sidebar: true
  },

];


function getRouteComponent(child) {
  switch (child) {
    case 'add':
      return <AddFeed />;
    case 'edit':
      return <AddFeed />;
    case 'view':
      return <AddFeed />;
    case 'addAdd':
      return <Add />;
    default:
      return null;
  }
}



export { routes, getRouteComponent }; // Export as the default export