import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Profile from './Components/Profile/Profile.jsx';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route, Switch, Outlet, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <div className='app-wrapper'>
          <Header />
          <Nav />
          <div className='app-wrapper-content'> */}
            <Route path="/" element={<Profile />} />
            {/* <Route index element={<Profile />} />
                <Route path="dialogs" element={<Dialogs />} />
                <Route path="profile" element={<Profile />} /> */}
          {/* </div>
        </div> */}
      </Routes>
    </Router>
  )
}

export default App;