import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoutes from './protectedRoutes';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
