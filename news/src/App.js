
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import AddFeed from './Components/Dashboard/Add';

import Add from "./Components/Users/Add";
import UserList from "./Components/Users/UserList";


function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Login />} />
          <Route path='/' element={<MainLayout />} >
            <Route path='/Feed' element={<Dashboard />} />
            <Route path='/Feed/add' element={<AddFeed />} />

            <Route path='/userlist/Add' element={<Add />} />
            <Route path='/userlist' element={<UserList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
