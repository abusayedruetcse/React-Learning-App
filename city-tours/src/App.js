import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Tourlist from './components/Tourlist/Tourlist'
import {tourData} from './tourData';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Tourlist tourlist={tourData}/>
    </React.Fragment>
  );
}

export default App;
