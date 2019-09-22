import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/AddLogModal';
import EditLogModal from './components/EditLogModal';
import AddTechnicianModal from './components/AddTechnicianModal';
import TechnicianList from './components/TechnicianList';

function App() {
  useEffect(() => {
    //initializes Material css
    M.AutoInit();
  });
  return (
    <div className='App'>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
      <AddBtn/>
      <AddLogModal/>
      <EditLogModal/>
      <AddTechnicianModal/>
      <TechnicianList/>
    </div>
  );
}

export default App;
