import { UserProvider } from './context/UserContext';


function Provider({children}) {
  return (
      <UserProvider>
        {children}
      </UserProvider>
 
  );
}

export default Provider;
