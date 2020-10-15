import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/style.css';
import './App.css';
import NavBar from './Components/Navbar';
import Users from './Components/Users';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Users />
    </React.Fragment>
  );
}

export default App;
