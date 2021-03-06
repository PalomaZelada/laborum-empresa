import React from 'react';
import { useUser } from 'reactfire';
import './App.css';
import LoginScreen from './assets/components/login/LoginScreen';
import Home from './assets/views/Home';
import Jobs from './assets/components/gestionAvisos/avisos';

function App() {
  const user = useUser();

  return (
    <div className="App">
      { !user && <LoginScreen /> }

      { user && <Home /> }
    </div>
  );
}

export default App;
