import Dashboard from "./Components/Dashboard/Dashboard";
import AddFeed from './Components/Dashboard/Add';
import Add from "./Components/Users/Add";
import UserList from "./Components/Users/UserList";

const Router = [
    {
        path: "/Feed",
        element: <Dashboard />,
        type: 'Feed'
    },
    {
        path: "/Feed/add",
        element: <AddFeed />,
        type: 'add'
    },
    {
        path: "/userlist",
        element: <UserList />,
        type: 'userlist'
    },
    {
        path: "/userlist/Add",
        element: <Add />,
        type: 'userlist'
    },


]



export default Router; // Export as the default export