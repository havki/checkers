const bigComparer = (prev,next) =>{
  if (
    (prev.x === next.x - 1 && prev.y === next.y + 1) || // лево-вниз
    (prev.x === next.x + 1 && prev.y === next.y + 1) || // право-вниз
    (prev.x === next.x - 1 && prev.y === next.y - 1) || // лево-вверх
    (prev.x === next.x + 1 && prev.y === next.y - 1) ||// право-вверх

    (prev.x === next.x - 2 && prev.y === next.y + 2) || // лево-вниз
    (prev.x === next.x + 2 && prev.y === next.y + 2) || // право-вниз
    (prev.x === next.x - 2 && prev.y === next.y - 2) || // лево-вверх
    (prev.x === next.x + 2 && prev.y === next.y - 2) ||// право-вверх

    (prev.x === next.x - 3 && prev.y === next.y + 3) || // лево-вниз
    (prev.x === next.x + 3 && prev.y === next.y + 3) || // право-вниз
    (prev.x === next.x - 3 && prev.y === next.y - 3) || // лево-вверх
    (prev.x === next.x + 3 && prev.y === next.y - 3) ||// право-вверх

    (prev.x === next.x - 4 && prev.y === next.y + 4) || // лево-вниз
    (prev.x === next.x + 4 && prev.y === next.y + 4) || // право-вниз
    (prev.x === next.x - 4 && prev.y === next.y - 4) || // лево-вверх
    (prev.x === next.x + 4 && prev.y === next.y - 4) ||// право-ввер5
    
    (prev.x === next.x - 5 && prev.y === next.y + 5) || // лево-вниз
    (prev.x === next.x + 5 && prev.y === next.y + 5) || // право-вниз
    (prev.x === next.x - 5 && prev.y === next.y - 5) || // лево-вверх
    (prev.x === next.x + 5 && prev.y === next.y - 5) ||// право-вверх

    (prev.x === next.x - 6 && prev.y === next.y + 6) || // лево-вниз
    (prev.x === next.x + 6 && prev.y === next.y + 6) || // право-вниз
    (prev.x === next.x - 6 && prev.y === next.y - 6) || // лево-вверх
    (prev.x === next.x + 6 && prev.y === next.y - 6) ||// право-вверх

    (prev.x === next.x - 7 && prev.y === next.y + 7) || // лево-вниз
    (prev.x === next.x + 7 && prev.y === next.y + 7) || // право-вниз
    (prev.x === next.x - 7 && prev.y === next.y - 7) || // лево-вверх
    (prev.x === next.x + 7 && prev.y === next.y - 7) ||// право-вверх

    (prev.x === next.x - 8 && prev.y === next.y + 8) || // лево-вниз
    (prev.x === next.x + 8 && prev.y === next.y + 8) || // право-вниз
    (prev.x === next.x - 8 && prev.y === next.y - 8) || // лево-вверх
    (prev.x === next.x + 8 && prev.y === next.y - 8) // право-вверх
  ) {
    return true
  }
  return false
}

export default bigComparer