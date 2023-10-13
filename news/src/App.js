import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
  import Login from './Components/Login';
  import MainLayout from './Layouts/MainLayout';
  import Dashboard from './Components/Dashboard/Dashboard';
  import { routes, getRouteComponent } from './Router';
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



export default App;
