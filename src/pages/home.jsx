import { UserContext, useUserContext } from '../context/UserContext';

function Home() {
  const user = useUserContext();
  console.log(user);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Home;
