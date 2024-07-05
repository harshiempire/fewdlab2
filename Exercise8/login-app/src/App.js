// src/App.js
import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from './AuthContext';
import Login from './Login';
import Home from './Home';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">

      {user ? <Home /> : <Login />}
    </div>
  );
}

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
