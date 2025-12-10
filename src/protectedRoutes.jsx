import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

const ProtectedRoutes = () => {
  const {user} = useUserContext();
  const userData = JSON.parse(localStorage.getItem('user'))
  
  if (!userData) {
    return <Navigate to={"/login"} replace/>
  } 
  return (
    user.isLoggedIn || userData.isLoggedIn ? <Outlet/> : <Navigate to={"/login"} replace/>
  )
};

export default ProtectedRoutes;