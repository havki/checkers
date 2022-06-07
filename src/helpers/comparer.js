const comparer = (prev, next) => {
  let moveDirection = '';
  switch (true) {  //опредление направления рубления относительно конечной точки
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
        
        if(moveDirection==='ld'){         //вычисления позиции срубленной шашки
          return {x:next.x-1,y:next.y+1}
        }
        if(moveDirection==='rd'){
          return {x:next.x+1,y:next.y+1}
        }
        if(moveDirection==='lt'){
          return {x:next.x-1,y:next.y-1}
        }
        if(moveDirection==='rt'){
          return {x:next.x+1,y:next.y-1}
        }


  return moveDirection;

  
};
export default comparer;

