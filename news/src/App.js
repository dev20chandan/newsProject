import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from './Components/Login';
import MainLayout from './Layouts/MainLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import { routes, getRouteComponent } from './Router';
import PaymentForm from "./Components/Payments/PaymentForm";
function App() {
  const permission = ['Feed','User','live']
  const role ="admin"
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/payment" element={<PaymentForm />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          {routes.map((route) => (
           route.sidebar? role ==="admin"? <Route key={route.path} path={route.path} element={<Outlet />}>
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
            </Route> :  <Route path={route.path} element={<>NOT PERISSION</>} /> :<Route key={route.path} path={route.path} element={<Outlet />}>
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
