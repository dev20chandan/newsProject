
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import MainLayout from './Layouts/MainLayout';
import Router from './Router'

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Login />} />
          <Route path='/' element={<MainLayout />} >
            {
              Router.map(({path,element}, i) =>
                <Route key={i} path={path} element={element} />
              )
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
