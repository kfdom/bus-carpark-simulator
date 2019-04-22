import React from 'react';
import Navbar from '../components/Navbar';
import BusMovementInputSec from './BusMovementInputSec';
import BusLocationReportSec from './BusLocationReportSec';
import BusMovementHistorySec from './BusMoventHistorySec';

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <br />
        <br />
        <br />
        <BusMovementInputSec />
        <br />
        <br />
        <br />
        <BusLocationReportSec />
        <br />
        <br />
        <br />
        <BusMovementHistorySec />
      </div>
    </div>
  );
};

export default App;
