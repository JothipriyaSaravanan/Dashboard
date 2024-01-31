import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedSector, setSelectedSector] = useState(0);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleSectorChange = (sector) => {
    setSelectedSector(sector);
  };

  return (
    <Router>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} onSectorChange={handleSectorChange} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Home selectedSector={selectedSector} />
      </div>
    </Router>
  );
}

export default App;

