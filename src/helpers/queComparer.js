/*
отдает объект с результатом  в виде направления рубления 
и кооридинатами клеток между начальной и конечной точки 

*/
const queComparer = (prev, next) => {
  let moveDirection = "";
  let counter = 0;

  for (let i = 1; i < 8; i++) {
    if (moveDirection) break;
    counter += 1;
    switch (
      true //опредление направления рубления относительно конечной точки
    ) {
      case prev.x === next.x - i && prev.y === next.y + i:
        moveDirection = "ld";
        break;
      case prev.x === next.x + i && prev.y === next.y + i:
        moveDirection = "rd";
        break;
      case prev.x === next.x - i && prev.y === next.y - i:
        moveDirection = "lt";
        break;
      case prev.x === next.x + i && prev.y === next.y - i:
        moveDirection = "rt";
        break;
      default:
        break;
    }
  }

  let array = [];
  for (let i = 1; i < counter; i++) {
    //вычисления позиций срубленых шашек
    if (moveDirection === "ld") {
      array.push({ x: next.x - i, y: next.y + i });
    }
    if (moveDirection === "rd") {
      array.push({ x: next.x + i, y: next.y + i });
    }
    if (moveDirection === "lt") {
      array.push({ x: next.x - i, y: next.y - i });
    }
    if (moveDirection === "rt") {
      array.push({ x: next.x + i, y: next.y - i });
    }
  }



  let upOrDown = "";
  switch (moveDirection) {
    case "lt":
    case "rt":
      upOrDown = "down";
      break;

    case "ld":
    case "rd":
      upOrDown = "up";
      break;

    default:
      break;
  }

 

  return {line:array.reverse(),orient:upOrDown }

};

export default queComparer;
