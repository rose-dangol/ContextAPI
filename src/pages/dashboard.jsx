import ThemeSwitcher from '../components/themeSwitcher';

function Dashboard() {
  return (
    <div>
      <ThemeSwitcher />
      {/* replace user with the username from the login */}
      <h1 className="text-5xl">Welcome User</h1>
    </div>
  );
}

export default Dashboard;
