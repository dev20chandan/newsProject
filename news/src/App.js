import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './Components/Login';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import AddFeed from './Components/Dashboard/Add';
import Add from "./Components/Users/Add";
import UserList from "./Components/Users/UserList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} /> {/* Show Dashboard by default */}
            <Route path="Feed" element={<Outlet />}>
              <Route index element={<Dashboard />} /> {/* Show Dashboard within Feed section */}
              <Route path="add" element={<AddFeed />} /> {/* Show AddFeed within Feed section */}
            </Route>
            <Route path="userlist" element={<Outlet />}>
              <Route index element={<UserList />} /> {/* Show UserList within userlist section */}
              <Route path="Add" element={<Add />} /> {/* Show Add within userlist section */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;