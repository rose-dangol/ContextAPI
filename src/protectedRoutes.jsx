import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from './context/UserContext';

const ProtectedRoutes = () => {
  const {user} = useUser();
  const userData = JSON.parse(localStorage.getItem('user'))
  return (
    user.isLoggedIn || userData.isLoggedIn ? <Outlet/> : <Navigate to={"/login"} replace/>
  )
};

export default ProtectedRoutes;