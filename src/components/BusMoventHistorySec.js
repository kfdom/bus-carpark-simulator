import React from 'react';

const BusMovementHistorySec = ({ busMovementHistory = [] }) => {
  return (
    <div className="container">
      {busMovementHistory.length > 0 && (
        <>
          <h3>Bus Movement History</h3>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>No</th>
                <th>Type</th>
                <th>Description</th>
                <th>Old Position</th>
                <th>New Position</th>
              </tr>
            </thead>
            <tbody>
              {busMovementHistory.map((item, index) => {
                let displayOldLoc = item.oldLoc ? (
                  <div>
                    {item.oldLoc.xAxis},{item.oldLoc.yAxis},{item.oldLoc.face}
                  </div>
                ) : (
                  <div>Undefined</div>
                );

                let displayNewLoc = item.newLoc ? (
                  <div>
                    {item.newLoc.xAxis},{item.newLoc.yAxis},{item.newLoc.face}
                  </div>
                ) : (
                  <div>Undefined</div>
                );

                return (
                  <tr key={index + 1} style={{ color: item.type === 'Error' ? 'red' : undefined }}>
                    <td>{index + 1}</td>
                    <td>{item.type}</td>
                    <td>{item.message}</td>
                    <td>{displayOldLoc}</td>
                    <td>{displayNewLoc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>{' '}
        </>
      )}
    </div>
  );
};

export default BusMovementHistorySec;
