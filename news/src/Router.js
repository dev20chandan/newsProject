import Dashboard from './Components/Dashboard/Dashboard';
import AddFeed from './Components/Dashboard/Add';
import Add from "./Components/Users/Add";
import UserList from "./Components/Users/UserList";
const routes = [
  { path: 'Feed', element: <Dashboard />, children: ['add', 'edit', 'view'] },
  { path: 'User', element: <UserList />, children: ['addAdd'] },
];


function getRouteComponent(child) {
  // Define a function to return the appropriate component based on the child route
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



export  {routes,getRouteComponent}; // Export as the default export