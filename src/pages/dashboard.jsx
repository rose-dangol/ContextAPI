import ThemeSwitcher from '../components/themeSwitcher';

function Dashboard() {
  const userData = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      {/* <ThemeSwitcher /> */}
      {/* replace user with the username from the login */}
      <h1 className="text-5xl">Welcome User {userData.name}</h1>         
    </div>
  );
}

export default Dashboard;
