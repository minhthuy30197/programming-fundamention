'use strict';

function drawRectangle(numDot, numRow) {
  let countDot;
  let countRow = 0;
  let result = '';
  while (countRow < numRow) {
    countDot = 0;
    while (countDot < numDot) {
      result = result + '*';
      countDot++;
    }
    result = result + '\n';
    countRow++;
  }
  return result;
}

function drawEmptyRectangle(numDot, numRow) {
  let countDot;
  let countRow = 1;
  let rs = '';
  while (countRow <= numRow) {
    if (countRow > 1 && countRow < numRow) {
      countDot = 1;
      while (countDot <= numDot) {
        if (countDot > 1 && countDot < numDot) {
          rs = rs + ' ';
        } else rs = rs + '*';
        countDot++;
      }
      rs = rs + '\n';
    }
    else rs = rs + drawRectangle(numDot,1);
    countRow++;
  }
  return rs;
}