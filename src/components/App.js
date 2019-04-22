import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BusMovementInputSec from './BusMovementInputSec';
import BusLocationReportSec from './BusLocationReportSec';
import BusMovementHistorySec from './BusMoventHistorySec';

const App = () => {
  const [reportLoc, setReportLoc] = useState([]);
  const [busMovementHistory, setbusMovementHistory] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="jumbotron" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <BusMovementInputSec
              setReportLoc={setReportLoc}
              setbusMovementHistory={setbusMovementHistory}
            />
          </div>
          <div style={{ marginBottom: '50px' }}>
            <BusLocationReportSec reportLoc={reportLoc} />
          </div>
          <div>
            <BusMovementHistorySec busMovementHistory={busMovementHistory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
