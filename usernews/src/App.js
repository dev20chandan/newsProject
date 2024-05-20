import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./Components/Dashboard";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<MainLayout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/test" element={"Home data"} />
          </Route>

          <Route path="/Home" element={"hello"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
