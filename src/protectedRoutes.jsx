import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

const ProtectedRoutes = () => {
  const {user} = useUserContext();
  const userData = JSON.parse(localStorage.getItem('user'))
  return (
    user.isLoggedIn || userData.isLoggedIn ? <Outlet/> : <Navigate to={"/login"} replace/>
  )
};

export default ProtectedRoutes;