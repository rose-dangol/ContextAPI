
import Provider from './provider';
import Router from './router';

function App() {
  return (
    <div className="grid place-items-center h-screen dark:bg-gray-400">
      <Provider>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
