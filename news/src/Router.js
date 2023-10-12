import Dashboard from "./Components/Dashboard/Dashboard";
import AddFeed from './Components/Dashboard/Add';
import Add from "./Components/Users/Add";
import UserList from "./Components/Users/UserList";

const Router = [
    {
        path: "/Feed",
        element: <Dashboard />,
        permission: 'Feed',
    },
    {
        path: "/Feed/add",
        element: <AddFeed />,
        permission: 'listing',
    },
    {
        path: "/userlist",
        element: <UserList />,
        permission: 'userlisting',
    },
    {
        path: "/userlist/Add",
        element: <Add />,
        type: 'adduser'
    },


]



export default Router; // Export as the default export