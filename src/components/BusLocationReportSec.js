import React from 'react';

const BusLocationReportSec = ({ reportLoc = [] }) => {
  return (
    <div className="container">
      {reportLoc.length > 0 && <h3>Report</h3>}
      {reportLoc.map((item, index) => {
        return (
          <div key={index} className="alert alert-success">
            {index + 1}. Bus Location : {item.xAxis},{item.yAxis},{item.face}{' '}
          </div>
        );
      })}
    </div>
  );
};

export default BusLocationReportSec;
