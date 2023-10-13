import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './Components/Login';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import AddFeed from './Components/Dashboard/Add';
import Add from "./Components/Users/Add";
import UserList from "./Components/Users/UserList";

const routes = [
  { path: 'Feed', element: <Dashboard />, children: ['add', 'edit', 'view'] },
  { path: 'userlist', element: <UserList />, children: ['addAdd'] },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<Outlet />}>
              <Route index element={route.element} />
              {route.children.map((child) => (
                <Route key={child} path={child} element={getRouteComponent(child)} />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

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

export default App;
