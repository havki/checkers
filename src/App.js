import { useEffect, useState } from 'react';
import './App.css';
import Board from './Components/Board';
import { BoardModel } from './Models/BoardModel';



const cells = [];

for(let i=0;i<64;i++){
  
  
  cells.push({
    color: (Math.floor(i/8)+i)%2?'black':'white',
    x: i%8,
    y: ~~(i/8)
  });
}




function App() {
  const [board, setBoard] = useState('')
  useEffect(() => {
    setBoard(BoardModel())
  
   
  }, [])
  
  
  
  return (
    <div className="App">
      <Board board={board}/>
    </div>
  );
}

export default App;
