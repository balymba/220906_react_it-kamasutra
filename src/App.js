import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile.jsx';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;