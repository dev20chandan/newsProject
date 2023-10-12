
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import MainLayout from './Layouts/MainLayout';
import Router from './Router'

function App() {
  const userPermissions =["Feed","listing","userlisting"]
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path='/' element={<Login />} />
          <Route path='/' element={<MainLayout />} >
            {
                
              Router.map(({path,element,permission}, i) =>

              userPermissions.includes(permission) ? (
                <Route key={i} path={path} element={element} />
              ) : (
                <Route key={i} path={path} element={<>no permission</>} />
              )

                // <Route key={i} path={path} element={element} />
              )
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
