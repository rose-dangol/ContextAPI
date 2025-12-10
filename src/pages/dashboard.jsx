import ThemeSwitcher from '../components/themeSwitcher';
import { useUserContext } from '../context/UserContext';

function Dashboard() {
  const userData = JSON.parse(localStorage.getItem('user'))
  const {logout} = useUserContext();
  const handleLogout =()=>{
    logout()
  }
  return (
    <div className=''>
      <ThemeSwitcher />
      {/* replace user with the username from the login */}
      <h1 className="text-5xl">Welcome User, {userData.name}</h1>
      <button onClick={handleLogout} className="bg-red-500 border text-white w-min px-4 py-2 rounded-sm cursor-pointer ml-auto">Logout</button>         
    </div>
  );
}

export default Dashboard;
