import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs';

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
    </div>
  );
}

export default App;
