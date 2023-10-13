import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './Components/Login';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import { routes, getRouteComponent } from './Router';
function App() {
  const permission = ["User"]
  const role ="admin"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          {routes.map((route) => (
            role =="admin"? <Route key={route.path} path={route.path} element={<Outlet />}>
            <Route index element={route.element} />
            {route.children.map((child) => (
              <Route key={child} path={child} element={getRouteComponent(child)} />
            ))}
          </Route>  
            : permission.includes(route.path) ?
             <Route key={route.path} path={route.path} element={<Outlet />}>
              <Route index element={route.element} />
              {route.children.map((child) => (
                <Route key={child} path={child} element={getRouteComponent(child)} />
              ))}
            </Route> :  <Route path={route.path} element={<>NOT PERISSION</>} />

          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
