import isEmpty from '../validation/is-empty';

export const calBusMovement = (MovementArr = []) => {
  let messages = [];
  let isPlaceFound = false;
  let newLocation = {};
  let ReportLocation = [];

  if (MovementArr.length === 0) {
    messages.push({ type: 'Error', message: 'No Movement Found!', oldLoc: null, newLoc: null });
  }

  MovementArr.forEach((item, index) => {
    if (!isPlaceFound && !item.includes('PLACE')) {
      messages.push({
        type: 'Error',
        message: 'Movement Ignore until PLACE Command executed!',
        oldLoc: null,
        newLoc: null
      });
    } else if (item.includes('PLACE')) {
      const moveTo = item.substring(6);
      const newMoveData = moveTo.split(',');

      isPlaceFound = true;
      let oldLocation = newLocation;
      newLocation = execActionPlace(newMoveData);
      messages.push({
        type: 'Info',
        message: 'Command PLACE executed!',
        oldLoc: isEmpty(oldLocation) ? null : oldLocation,
        newLoc: newLocation
      });
    } else if (isPlaceFound && item.includes('LEFT')) {
      let oldLocation = newLocation;
      newLocation = execActionLeft(newLocation);
      messages.push({
        type: 'Info',
        message: 'Command LEFT executed!',
        oldLoc: oldLocation,
        newLoc: newLocation
      });
    } else if (isPlaceFound && item.includes('RIGHT')) {
      let oldLocation = newLocation;
      newLocation = execActionRight(newLocation);
      messages.push({
        type: 'Info',
        message: 'Command RIGHT executed!',
        oldLoc: oldLocation,
        newLoc: newLocation
      });
    } else if (item.includes('REPORT')) {
      ReportLocation.push(newLocation);
      messages.push({
        type: 'Info',
        message: 'Command REPORT executed!',
        oldLoc: newLocation,
        newLoc: newLocation
      });
    } else if (isPlaceFound && item.includes('MOVE')) {
      if (newLocation.face === 'EAST' && newLocation.xAxis >= 5) {
        messages.push({
          type: 'Error',
          message: 'Movement Ignore, Bus moving out of Car Park!',
          oldLoc: newLocation,
          newLoc: newLocation
        });
      } else if (newLocation.face === 'WEST' && newLocation.xAxis <= 0) {
        messages.push({
          type: 'Error',
          message: 'Movement Ignore, Bus moving out of Car Park!',
          oldLoc: newLocation,
          newLoc: newLocation
        });
      } else if (newLocation.face === 'NORTH' && newLocation.yAxis >= 5) {
        messages.push({
          type: 'Error',
          message: 'Movement Ignore, Bus moving out of Car Park!',
          oldLoc: newLocation,
          newLoc: newLocation
        });
      } else if (newLocation.face === 'SOUTH' && newLocation.yAxis <= 0) {
        messages.push({
          type: 'Error',
          message: 'Movement Ignore, Bus moving out of Car Park!',
          oldLoc: newLocation,
          newLoc: newLocation
        });
      } else {
        let oldLocation = newLocation;
        newLocation = execActionMove(newLocation);

        messages.push({
          type: 'Info',
          message: 'Command MOVE executed!',
          oldLoc: oldLocation,
          newLoc: newLocation
        });
      }
    }
  });

  return { ReportLocation, messages };
};

const execActionPlace = currentBusPos => {
  return {
    xAxis: parseInt(currentBusPos[0]),
    yAxis: parseInt(currentBusPos[1]),
    face: currentBusPos[2]
  };
};

const execActionLeft = oldLocation => {
  if (oldLocation.face === 'NORTH') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'WEST' };
  } else if (oldLocation.face === 'WEST') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'SOUTH' };
  } else if (oldLocation.face === 'SOUTH') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'EAST' };
  } else if (oldLocation.face === 'EAST') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'NORTH' };
  } else {
    return;
  }
};

const execActionRight = oldLocation => {
  if (oldLocation.face === 'NORTH') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'EAST' };
  } else if (oldLocation.face === 'EAST') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'SOUTH' };
  } else if (oldLocation.face === 'SOUTH') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'WEST' };
  } else if (oldLocation.face === 'WEST') {
    return { xAxis: oldLocation.xAxis, yAxis: oldLocation.yAxis, face: 'NORTH' };
  } else {
    return;
  }
};

const execActionMove = oldLocation => {
  if (oldLocation.face === 'NORTH') {
    return {
      xAxis: oldLocation.xAxis,
      yAxis: oldLocation.yAxis + 1,
      face: oldLocation.face
    };
  } else if (oldLocation.face === 'EAST') {
    return {
      xAxis: oldLocation.xAxis + 1,
      yAxis: oldLocation.yAxis,
      face: oldLocation.face
    };
  } else if (oldLocation.face === 'SOUTH') {
    return {
      xAxis: oldLocation.xAxis,
      yAxis: oldLocation.yAxis - 1,
      face: oldLocation.face
    };
  } else if (oldLocation.face === 'WEST') {
    return {
      xAxis: oldLocation.xAxis - 1,
      yAxis: oldLocation.yAxis,
      face: oldLocation.face
    };
  } else {
    return;
  }
};
