const comparer = (prev, next) => {
  let moveDirection = '';
  switch (true) {
          case (prev.x === next.x - 2 && prev.y === next.y + 2):
            moveDirection = "ld";
            break;
          case (prev.x === next.x + 2 && prev.y === next.y + 2):
            moveDirection = "rd";
            break;
          case (prev.x === next.x - 2 && prev.y === next.y - 2):
            moveDirection = "lt";
            break;
          case (prev.x === next.x + 2 && prev.y === next.y - 2):
            moveDirection = "rt";
            break;
          default:
            break;
        }
  return moveDirection;

  
};
export default comparer;

// let moveDirection = '';
//  if ((prev.x === next.x - 2 && prev.y === next.y + 2)) {
   
//  }
//  if ((prev.x === next.x + 2 && prev.y === next.y + 2)) {
   
//  }
//  if ( (prev.x === next.x - 2 && prev.y === next.y - 2)) {
   
//  }
//  if ((prev.x === next.x + 2 && prev.y === next.y - 2)) {
   
//  }
//  if (
//    (prev.x === next.x - 2 && prev.y === next.y + 2) || // лево-вниз
//    (prev.x === next.x + 2 && prev.y === next.y + 2) || // право-вниз
//    (prev.x === next.x - 2 && prev.y === next.y - 2) || // лево-вверх
//    (prev.x === next.x + 2 && prev.y === next.y - 2) // право-вверх
//  ) {
  
//  }